import { useState, useCallback } from 'react';

/**
 * Generic hook for handling any API call with consistent state management
 * @param {Object} options - Configuration options
 * @param {Function} options.onSuccess - Callback for successful API call
 * @param {Function} options.onError - Callback for API error
 * @param {boolean} options.showSuccessMessage - Whether to show success toast
 * @param {boolean} options.showErrorMessage - Whether to show error toast
 */
export const useApiCall = ({ 
  onSuccess, 
  onError, 
  showSuccessMessage = false,
  showErrorMessage = true 
} = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = useCallback(async (apiFunction, ...args) => {
    try {
      setIsLoading(true);
      setError(null);

      const result = await apiFunction(...args);

      setData(result);
      onSuccess?.(result);
      
      if (showSuccessMessage) {
        // You can integrate with your toast/notification system here
        console.log('Operation completed successfully');
      }

      return result;
    } catch (err) {
      const errorMsg = err.message || 'An error occurred';
      setError(errorMsg);
      onError?.(err);
      
      if (showErrorMessage) {
        // You can integrate with your toast/notification system here
        console.error('Operation failed:', errorMsg);
      }
      
      throw err; // Re-throw so component can handle if needed
    } finally {
      setIsLoading(false);
    }
  }, [onSuccess, onError, showSuccessMessage, showErrorMessage]);

  const reset = useCallback(() => {
    setIsLoading(false);
    setError(null);
    setData(null);
  }, []);

  return {
    // State
    isLoading,
    error,
    data,
    
    // Actions
    execute,
    reset,
    
    // Computed
    isSuccess: !!data && !error,
    hasError: !!error
  };
};