// COMMENTED OUT - Build this yourself following the guide below!


import { useState, useCallback } from 'react';
import { uploadAgentImage } from '../API/other_requests';

export const useImageUpload = ({
  onSuccess,
  onError,
  autoReset = true
} = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadedImage, setUploadedImage] = useState(null);

  const resetState = useCallback(() => {
    setLoading(false);
    setProgress(0);
    setError(null);
    setUploadedImage(null);
  }, []); // Added empty dependency array
  
  const uploadImage = useCallback(async (file, agentId) => {
    // Validate inputs
    if (!file || !agentId) {
      const errorMsg = 'File and agent ID are required';
      setError(errorMsg);
      onError?.(new Error(errorMsg));
      return null;
    }
    
    setLoading(true);
    setError(null);
    setProgress(0);

    try {
      // Call the API function with the progress callback
      const response = await uploadAgentImage(file, agentId, (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setProgress(percentCompleted);
      });
      
      if (response) {
        // Store the uploaded image data
        setUploadedImage(response);
        
        // Call success callback if provided
        onSuccess?.(response);
        
        // Auto-reset if enabled
        if (autoReset) {
          setTimeout(() => {
            resetState();
          }, 1000);
        }
        
        return response;
      }
    } catch (err) {
      const errorMsg = err.message || 'Failed to upload image';
      setError(errorMsg);
      onError?.(err);
      console.error('Image upload failed:', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, [onSuccess, onError, autoReset, resetState]); // Added resetState to dependencies
  
  return {
    // State
    isLoading: loading,
    progress,
    error,
    uploadedImage, // Renamed for clarity
    
    // Actions
    uploadImage,
    resetState,
    
    // Computed
    isSuccess: !!uploadedImage && !loading && !error,
    hasError: !!error // Renamed for consistency
  };
};
