import React, { useState } from 'react';
import './AgentProfile.css';
import AppBar from '../Home/components/appBar';
import Footer from '../../components/footer/footer';
import AgentProfileHeader from '../../components/AgentProfileHeader/AgentProfileHeader';
import AgentAboutSection from '../../components/AgentAboutSection/AgentAboutSection';
import AgentPropertiesTable from '../../components/AgentPropertiesTable/AgentPropertiesTable';
import AgentPromoteSection from '../../components/AgentPromoteSection/AgentPromoteSection';
import ImageUploadDialog from '../../components/imageUploadDialog/imageUploadDialog';
import { uploadAgentImage } from '../../../API/other_requests';
import { Link, useNavigate } from 'react-router-dom';
import profilePlaceholder from '../../../../public/assets/images/Profile_avatar_placeholder.png';

function AgentProfile() {
    const navigate = useNavigate();

    // State for image upload dialog
    const [showImageUploadDialog, setShowImageUploadDialog] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [imageUploadProgress, setImageUploadProgress] = useState(0);

    // Mock agent data - this would come from API in real implementation
    const agentData = {
        photo: profilePlaceholder,
        name: "Elizabeth Cruz",
        company: "Keller Williams Southland Partners",
        priceRange: "$13K - $3.8M",
        salesLast12Months: "497",
        totalSalesInCity: "5164",
        totalSales: "6,318",
        averagePrice: "$530K"
    };

    // Mock agent about data - this would come from API in real implementation
    const agentAboutData = {
        sectionTitle: "Get to know Elizabeth Cruz",
        title: "Licensed Salesperson",
        description: "", // Empty for now - will show placeholder
        specialties: ["Buyer's Agent", "Listing Agent", "Investment Properties", "Military/Veterans"],
        languages: [], // Empty for now
        experience: "13 Years of experience"
    };

    // Empty properties data - will show placeholder
    const propertiesData = [];
    // Carousel items - will show placeholder
    const carouselItems = [];
    const items = [
        <div key="placeholder" className="carousel-placeholder">
            <div className="placeholder-icons">
                <div className="placeholder-icon">🏠</div>
                <div className="placeholder-icon">🏢</div>
                <div className="placeholder-icon">🏘️</div>
                <div className="placeholder-icon">🏠</div>
                <div className="placeholder-icon">🌳</div>
            </div>
            <span>No sales reported yet</span>
        </div>
    ];

    // const promotionNavigation : 
    const handlePromotionItemClick = (item) => {
        console.log(`Navigate to: ${item.text}`);

        // if (item.destination !== 'dialog') {
        //     // navigate(item.page);
        //     // Link()
        // }
        // Handle dialog opening if needed
         if (item.dialogType === 'imageUpload') {
            setShowImageUploadDialog(true);
        }
        //! if i added more dialogs
        // else {
        //     switch (item.dialogType) {
        //         case 'imageUpload':
        //             setShowImageUploadDialog(true);
        //             break;
        //         // Add more dialog types as needed
        //         // case 'otherDialogType':
        //         //     setShowOtherDialog(true);
        //         //     break;
        //         default:
        //             console.warn(`Unknown dialog type: ${item.dialogType}`);
        //     }
        // }
    };

    // Handle image selection from the upload dialog
    const handleImageSelect = async (file) => {
        setUploadedImage(file);

        // Start upload immediately when image is selected
        try {
            // Reset progress
            setImageUploadProgress(0);

            // Assuming we have the agent ID, for now using a placeholder
            const agentId = '123'; // This would come from authentication context or props
            const result = await uploadAgentImage(file, agentId, setImageUploadProgress);

            if (result) {
                // Upload successful - close dialog after showing completion
                setTimeout(() => {
                    setShowImageUploadDialog(false);
                    setImageUploadProgress(0);
                    setUploadedImage(null);
                    // You might want to refresh the agent data here
                }, 1000); // Show 100% completion for a moment
            }
        } catch (error) {
            console.error('Failed to upload image:', error);
            setImageUploadProgress(0);
            // Handle error - show message to user
            alert('Failed to upload image. Please try again.');
        }
    };

    // Close the image upload dialog
    const handleCloseDialog = () => {
        setShowImageUploadDialog(false);
        setUploadedImage(null);
        setImageUploadProgress(0);
    };

    return (
        <div className="agent-profile-page">
            <AppBar />
            
            <div className="agent-profile-wrapper">
                <AgentProfileHeader
                    agentData={agentData}
                    carouselItems={items}
                    scrollTargetId="properties-list"
                />
                <div className="agent-profile-body">
                    <div className="agent-profile-body-left">
                        <AgentAboutSection
                            sectionTitle={agentAboutData.sectionTitle}
                            title={agentAboutData.title}
                            description={agentAboutData.description}
                            specialties={agentAboutData.specialties}
                            languages={agentAboutData.languages}
                            experience={agentAboutData.experience}
                            showMoreEnabled={false}
                        />
                        <AgentPropertiesTable
                            properties={propertiesData}
                            totalCount={0}
                        />
                    </div>
                    <div className="agent-profile-body-right">
                        <AgentPromoteSection
                            profileCompletion={25}
                            onPromotionItemClick={handlePromotionItemClick}
                        />
                    </div>
                </div>
            </div>
            <Footer />

            {/* Image Upload Dialog */}
            <ImageUploadDialog
                isOpen={showImageUploadDialog}
                uploadedImage={uploadedImage}
                imageUploadProgress={imageUploadProgress}
                onImageSelect={handleImageSelect}
                onClose={handleCloseDialog}
            />
        </div>
    );
}

export default AgentProfile;