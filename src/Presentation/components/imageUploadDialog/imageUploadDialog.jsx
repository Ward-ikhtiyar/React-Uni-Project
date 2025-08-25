import React, { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar/ProgressBar';
import './imageUploadDialog.css';

/**
 * ImageUploadDialog component for handling image uploads with drag and drop functionality
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether the dialog is open
 * @param {File|null} props.uploadedImage - Currently uploaded image file
 * @param {number} props.imageUploadProgress - Upload progress percentage (0-100)
 * @param {Function} props.onImageSelect - Callback function when image is selected
 * @param {Function} props.onClose - Callback function when dialog is closed
 */
const ImageUploadDialog = ({ isOpen, uploadedImage, imageUploadProgress, onImageSelect, onClose }) => {
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
    const dialogRef = useRef(null);

    // Preview URL for the uploaded image
    const [previewUrl, setPreviewUrl] = useState(null);

    // Handle dialog open/close
    React.useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isOpen]);

    // Update preview when uploadedImage changes
    React.useEffect(() => {
        if (uploadedImage) {
            const objectUrl = URL.createObjectURL(uploadedImage);
            setPreviewUrl(objectUrl);

            // Clean up the URL when component unmounts
            return () => URL.revokeObjectURL(objectUrl);
        }
    }, [uploadedImage]);

    // Handle drag events
    const handleDragEnter = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isDragging) {
            setIsDragging(true);
        }
    }, [isDragging]);

    // Handle drop event
    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0];
            if (file.type.startsWith('image/')) {
                onImageSelect(file);
            } else {
                alert('Please upload an image file');
            }
        }
    }, [onImageSelect]);

    // Handle file input change
    const handleFileInputChange = useCallback((e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file.type.startsWith('image/')) {
                onImageSelect(file);
            } else {
                alert('Please upload an image file');
            }
        }
    }, [onImageSelect]);

    // Handle click on drop area
    const handleClick = () => {
        fileInputRef.current.click();
    };

    // Handle dialog close events
    const handleDialogClose = useCallback(() => {
        // Clear preview when dialog closes
        setPreviewUrl(null);
        onClose();
    }, [onClose]);

    // Handle ESC key and backdrop click
    const handleDialogCancel = useCallback((e) => {
        e.preventDefault();
        // Clear preview when dialog is cancelled
        setPreviewUrl(null);
        onClose();
    }, [onClose]);

    // Handle close button click
    const handleCloseButtonClick = useCallback(() => {
        // Clear preview when close button is clicked
        setPreviewUrl(null);
        onClose();
    }, [onClose]);

    return (
        <dialog
            ref={dialogRef}
            className="image-upload-dialog"
            onClose={handleDialogClose}
            onCancel={handleDialogCancel}
        >
            <div className="dialog-header">
                <h2>Upload Image</h2>
                <button
                    type="button"
                    className="close-button"
                    onClick={handleCloseButtonClick}
                    aria-label="Close dialog"
                >
                    ×
                </button>
            </div>

            <div className="dialog-content">
                <div
                    className={`drop-area ${isDragging ? 'dragging' : ''} ${uploadedImage ? 'has-image' : ''}`}
                    onDragEnter={handleDragEnter}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={handleClick}
                >
                    {previewUrl ? (
                        <img src={previewUrl} alt="Preview" className="image-preview" />
                    ) : (
                        <div className="upload-prompt">
                            <i className="upload-icon">📁</i>
                            <p>Drag and drop an image here or click to browse</p>
                        </div>
                    )}
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileInputChange}
                        accept="image/*"
                        className="file-input"
                    />
                </div>

                {imageUploadProgress > 0 &&
                    (
                        <ProgressBar
                            percentage={imageUploadProgress}
                            showText={true}
                            textSuffix="% uploaded"
                            className="upload-progress"
                        />
                    )
                }

            </div>
        </dialog>
    );
};

ImageUploadDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    uploadedImage: PropTypes.object,
    imageUploadProgress: PropTypes.number,
    onImageSelect: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

ImageUploadDialog.defaultProps = {
    uploadedImage: null,
    imageUploadProgress: 0
};

export default ImageUploadDialog;