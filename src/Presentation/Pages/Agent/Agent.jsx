import React from 'react';
// import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import './Agent.css'
// import DisplayCard from '../Search-Proporties/components/RE-Listing/RE-Card/RE-Card';
import AppBar from '../Home/components/appBar';
import Footer from '../../components/footer/footer';
import AgentProfileHeader from '../../components/AgentProfileHeader/AgentProfileHeader';
import AgentContactForm from '../../components/AgentContactForm/AgentContactForm';
import AgentPropertiesTable from '../../components/AgentPropertiesTable/AgentPropertiesTable';
import AgentAboutSection from '../../components/AgentAboutSection/AgentAboutSection';
function AgentDialog() {
    const handleContactSubmit = (formData) => {
        console.log('Contact form submitted:', formData);
        // TODO: Implement API call to submit contact form
    };
    // function async fetchAgentPage(){
    //  const agentPage = await fetchAgentPageData();

    // }
    // Mock agent data - this would come from API in real implementation
    const agentData = {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEHbnGMLTCHTU3N45L2O_XBu61biBkJoRAw&s",
        name: "Matt Laricy",
        company: "Americorp Real Estate",
        priceRange: "$13K - $3.8M",
        salesLast12Months: "497",
        totalSalesInCity: "5164",
        totalSales: "6,318",
        averagePrice: "$530K"
    };

    // Mock agent about data - this would come from API in real implementation
    const agentAboutData = {
        sectionTitle: "Get to know Laricy",
        title: "Managing Broker/Partner, e-PRO",
        description: "As a third-generation realtor and Chicago native, Matt has developed a profound understanding of the local real estate market's dynamics. Raised in the south suburbs of Chicago and a current resident of River North, he is knowledgeable about each of the city's vibrant neighborhoods. He attended Eastern Illinois University where he gained essential business knowledge and an exceptional work ethic that serves his clients today. Currently, Matt is",
        specialties: ["Property Management", "First Time Homebuyers", "Luxury Homes"],
        languages: ["English", "Spanish", "Mandarin"],
        experience: "20 Years of experience"
    };

    // Mock properties data - this would come from API in real implementation
    const propertiesData = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=150&h=100&fit=crop",
            address: "1435 N Sedgwick St #PENTHOUSE 2",
            city: "Chicago, IL 60610",
            beds: 2,
            baths: 2,
            price: "$450,000"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=150&h=100&fit=crop",
            address: "1048 W Fulton St #4",
            city: "Chicago, IL 60607",
            beds: 2,
            baths: 2,
            price: "$699,000"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=150&h=100&fit=crop",
            address: "500 N Lake Shore Dr APT 1105",
            city: "Chicago, IL 60611",
            beds: 3,
            baths: 4,
            price: "$1,499,000"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=150&h=100&fit=crop",
            address: "2515 W Harrison St UNIT 1",
            city: "Chicago, IL 60612",
            beds: 3,
            baths: 3,
            price: "$450,000"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=150&h=100&fit=crop",
            address: "1120 N Lake Shore Dr #18CD",
            city: "Chicago, IL 60611",
            beds: 4,
            baths: 4,
            price: "$999,500"
        }
    ];
    // const transactiedText = text.substring(0, 450) +  "..." ;
    // const displayText = showMore ? text : transactiedText;
    // const [currentindex, setCurrentIndex] = useState(0);
    // const [agent, setAgent] = useState(null);
    //^ if parameter Agent has the propeties we can use it istead of making an api call

    const items = [
        // <DisplayCard/>,
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEHbnGMLTCHTU3N45L2O_XBu61biBkJoRAw&s"
            alt="Agent"
            className="carsouel-item"
        />,
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEHbnGMLTCHTU3N45L2O_XBu61biBkJoRAw&s"
            alt="Agent"
            className="carsouel-item"
        />,
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEHbnGMLTCHTU3N45L2O_XBu61biBkJoRAw&s"
            alt="Agent"
            className="carsouel-item"
        />,
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEHbnGMLTCHTU3N45L2O_XBu61biBkJoRAw&s"
            alt="Agent"
            className="carsouel-item"
        />,
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEHbnGMLTCHTU3N45L2O_XBu61biBkJoRAw&s"
            alt="Agent"
            className="carsouel-item"
        />,


    ];
    // useEffect(() => {
    //     async function fetchProperty() {
    //         try {
    //             const agentData = await 
    //             getDetails(propertyId);
    //             setAgent(agentData);
    //         } catch (error) {
    //             console.error("Failed to fetch agent data:", error);
    //         }
    //     }

    //     if (id) {
    //         fetchProperty();
    //     }
    // }, id);

    // const prevSlide = () => {
    //     setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    // };

    // const nextSlide = () => {
    //     setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    // };

    // const handleClose = (event, reason) => {
    //     // console.log(`reason ${reason}`);
    //     if (reason && reason === 'backdropClick') {
    //         return; // ignore clicks inside or ESC key
    //     }
    //     onClose();
    // };

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
                            showMoreEnabled={true}
                        />
                        <AgentPropertiesTable
                            properties={propertiesData}
                            totalCount={63}
                        />
                    </div>
                    <div className="agent-profile-body-right">
                        <AgentContactForm
                            onSubmit={handleContactSubmit}
                            buttonText="Contact the team"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AgentDialog;
