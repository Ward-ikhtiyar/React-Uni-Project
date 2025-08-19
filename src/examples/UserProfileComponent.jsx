import React, { useState } from 'react';
import { useImageUpload } from '../hooks/useImageUpload';
import { useApiCall } from '../hooks/useApiCall';
import { updateUserProfile, deleteUser } from '../API/user_requests';

const UserProfileComponent = ({ userId }) => {
  const [showImageDialog, setShowImageDialog] = useState(false);

  // Same image upload hook - zero repetition!
  const imageUpload = useImageUpload({
    onSuccess: (result) => {
      console.log('Profile image updated:', result);
      setShowImageDialog(false);
      // Maybe refresh user data here
    },
    onError: (error) => {
      alert(`Failed to update profile image: ${error.message}`);
    }
  });

  // Generic API hook for profile updates
  const profileUpdate = useApiCall({
    onSuccess: (result) => {
      console.log('Profile updated successfully:', result);
      // Show success message
    },
    onError: (error) => {
      alert(`Failed to update profile: ${error.message}`);
    },
    showSuccessMessage: true
  });

  // Generic API hook for user deletion
  const userDeletion = useApiCall({
    onSuccess: () => {
      console.log('User deleted successfully');
      // Redirect to users list
    },
    onError: (error) => {
      alert(`Failed to delete user: ${error.message}`);
    }
  });

  const handleImageUpload = async (file) => {
    await imageUpload.uploadImage(file, userId);
  };

  const handleProfileUpdate = async (profileData) => {
    await profileUpdate.execute(updateUserProfile, userId, profileData);
  };

  const handleDeleteUser = async () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await userDeletion.execute(deleteUser, userId);
    }
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      
      {/* Image Upload Section */}
      <div className="image-section">
        <button onClick={() => setShowImageDialog(true)}>
          Change Profile Image
        </button>
        {imageUpload.isUploading && (
          <div>Uploading... {imageUpload.progress}%</div>
        )}
        {imageUpload.error && (
          <div className="error">Error: {imageUpload.error}</div>
        )}
      </div>

      {/* Profile Update Section */}
      <div className="profile-section">
        <button 
          onClick={() => handleProfileUpdate({ name: 'New Name' })}
          disabled={profileUpdate.isLoading}
        >
          {profileUpdate.isLoading ? 'Updating...' : 'Update Profile'}
        </button>
        {profileUpdate.error && (
          <div className="error">Error: {profileUpdate.error}</div>
        )}
      </div>

      {/* Delete User Section */}
      <div className="danger-section">
        <button 
          onClick={handleDeleteUser}
          disabled={userDeletion.isLoading}
          className="danger-button"
        >
          {userDeletion.isLoading ? 'Deleting...' : 'Delete User'}
        </button>
        {userDeletion.error && (
          <div className="error">Error: {userDeletion.error}</div>
        )}
      </div>
    </div>
  );
};

export default UserProfileComponent;