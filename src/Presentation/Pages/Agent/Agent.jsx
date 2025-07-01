import { Button, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';
// import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import './Agent.css'
// import DisplayCard from '../Search-Proporties/components/RE-Listing/RE-Card/RE-Card';
import AppBar from '../Home/components/appBar';
import Footer from '../../components/footer/footer';
function AgentDialog() {
    const [showMore, setShowMore] = useState(false);
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
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fplaceholder-person&psig=AOvVaw34hyoWIE7gnWJvrDPSSBQr&ust=1750193539420000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjysJbp9o0DFQAAAAAdAAAAABAK"
            alt="Agent"
            className="carsouel-item"
        />,
        <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fplaceholder-person&psig=AOvVaw34hyoWIE7gnWJvrDPSSBQr&ust=1750193539420000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjysJbp9o0DFQAAAAAdAAAAABAK"
            alt="Agent"
            className="carsouel-item"
        />,
        <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fplaceholder-person&psig=AOvVaw34hyoWIE7gnWJvrDPSSBQr&ust=1750193539420000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjysJbp9o0DFQAAAAAdAAAAABAK"
            alt="Agent"
            className="carsouel-item"
        />,
        <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fplaceholder-person&psig=AOvVaw34hyoWIE7gnWJvrDPSSBQr&ust=1750193539420000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjysJbp9o0DFQAAAAAdAAAAABAK"
            alt="Agent"
            className="carsouel-item"
        />,
        <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fplaceholder-person&psig=AOvVaw34hyoWIE7gnWJvrDPSSBQr&ust=1750193539420000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjysJbp9o0DFQAAAAAdAAAAABAK"
            alt="Agent"
            className="carsouel-item"
        />,
        <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fplaceholder-person&psig=AOvVaw34hyoWIE7gnWJvrDPSSBQr&ust=1750193539420000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjysJbp9o0DFQAAAAAdAAAAABAK"
            alt="Agent"
            className="carsouel-item"
        />,
        <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fplaceholder-person&psig=AOvVaw34hyoWIE7gnWJvrDPSSBQr&ust=1750193539420000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjysJbp9o0DFQAAAAAdAAAAABAK"
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
                <div className="agent-profile-header">
                    <div className="agent-profile-header-left">
                        <div className="agent-header">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEHbnGMLTCHTU3N45L2O_XBu61biBkJoRAw&s"
                                alt="Agent"
                                className="agent-photo"
                            />
                        </div>
                        <div className="agent-info F-col-c-c">
                            <h2 className="agent-name">Matt Laricy</h2>
                            <p className="agent-company">Americorp Real Estate</p>
                            <p className="price-range">$13K - $3.8M <span>team price range</span></p>
                            <p className="sales">497 <span>team sales last 12 months</span></p>
                            <p className="sales">5164 <span>team sales in Chicago</span></p>
                        </div>
                    </div>
                    <div className="agent-profile-header-right F-col-c-c">
                        <div className="agent-properties-carousel">
                            <div className="agent-properties-carousel-title-row">
                                <span className="agent-properties-carousel-label">TEAM</span>
                                <span className="agent-properties-carousel-title">Recent Sales</span>
                            </div>
                            <div className="agent-properties-carousel-subtitle">
                                Sales numbers represent all team members
                            </div>
                            <ul className="agent-properties-list">
                                <li className="agent-properties-list-item">{items[0]}</li>
                                <li className="agent-properties-list-item">{items[0]}</li>
                                <li className="agent-properties-list-item">{items[0]}</li>
                                <li className="agent-properties-list-item">{items[0]}</li>
                                <li className="agent-properties-list-item see-more-item">
                                    <button className="see-more-btn" onClick={() => {
                                        const section = document.getElementById('properties-list');
                                        if (section) section.scrollIntoView({ behavior: 'smooth' });
                                    }}>
                                        See more
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="agent-profile-header-right-stats">
                            <div className="agent-stats-row">
                                <div className="agent-stat">
                                    <div className="agent-stat-value">498</div>
                                    <div className="agent-stat-label">Sales last 12 months</div>
                                </div>
                                <div className="agent-stat">
                                    <div className="agent-stat-value">6,318</div>
                                    <div className="agent-stat-label">Total sales</div>
                                </div>
                                <div className="agent-stat">
                                    <div className="agent-stat-value">$13K-$3.8M</div>
                                    <div className="agent-stat-label">Price range</div>
                                </div>
                                <div className="agent-stat">
                                    <div className="agent-stat-value">$530K</div>
                                    <div className="agent-stat-label">Average price</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="agent-profile-body">

                    <div className="agent-profile-body-left">
                        <div className="agent-profile-body-about-agent">
                            <h3 className="agent-profile-section-title">Get to know Laricy</h3>
                            <h4 className="agent-profile-title">Managing Broker/Partner, e-PRO</h4>
                            <p className="agent-profile-description">
                                As a third-generation realtor and Chicago native, Matt has developed a profound understanding of the local real estate market's dynamics. Raised in the south suburbs of Chicago and a current resident of River North, he is knowledgeable about each of the city's vibrant neighborhoods. He attended Eastern Illinois University where he gained essential business knowledge and an exceptional work ethic that serves his clients today. Currently, Matt is 
                                {/* {text.length > 450 && (
                                    <span className="agent-profile-showmore" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</span>
                                )} */}
                                

                            </p>
                            <div className="agent-profile-specialties">
                                <span className="agent-profile-specialties-label">Specialties</span>
                                <span className="agent-profile-specialty">Property Management</span>
                                <span className="agent-profile-specialty">First Time Homebuyers</span>
                                <span className="agent-profile-specialty">Luxury Homes</span>
                            </div>
                            <div className="agent-profile-languages">
                                <span className="agent-profile-languages-label">Speaks</span> English, Spanish, Mandarin
                            </div>
                            <div className="agent-profile-experience">
                                20 Years of experience
                            </div>
                            {/* <div className="agent-profile-links">
                                <a href="#" className="agent-profile-website">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                                    Visit team website
                                </a>
                                <span className="agent-profile-socials">
                                    <span className="agent-profile-social-icon">
                                        <svg width="20" height="20" fill="#1877f3" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                                    </span>
                                    <span className="agent-profile-social-icon">
                                        <svg width="20" height="20" fill="#0077b5" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.25h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z"/></svg>
                                    </span>
                                </span>
                            </div> */}
                        </div>
                        <div className="agent-profile-body-properties-list" id='properties-list'>
                            <h2 className="properties-list-title">For Sale (74)</h2>
                            <table className="properties-list-table">
                                <thead>
                                    <tr>
                                        <th className="properties-list-th properties-list-th-address">Address</th>
                                        <th className="properties-list-th">Bed/Bath</th>
                                        <th className="properties-list-th">Listing price</th>
                                    </tr>
                                </thead>
                                <tbody> 
                                    <tr className="properties-list-row">
                                        <td className="properties-list-td properties-list-td-address">
                                            <img className="properties-list-img" src="https://photos.zillowstatic.com/fp/1.jpg" alt="Property" />
                                            <div className="properties-list-address-text">
                                                <div className="properties-list-address-main">1801 W Diversey Pkwy UNIT 36</div>
                                                <div className="properties-list-address-sub">Chicago, IL 60614</div>
                                            </div>
                                        </td>
                                        <td className="properties-list-td">3 Bed, 3 Bath</td>
                                        <td className="properties-list-td">$599,995</td>
                                    </tr>
                                    <tr className="properties-list-row">
                                        <td className="properties-list-td properties-list-td-address">
                                            <img className="properties-list-img" src="https://photos.zillowstatic.com/fp/2.jpg" alt="Property" />
                                            <div className="properties-list-address-text">
                                                <div className="properties-list-address-main">1910 S Indiana Ave APT 627</div>
                                                <div className="properties-list-address-sub">Chicago, IL 60616</div>
                                            </div>
                                        </td>
                                        <td className="properties-list-td">1 Bed, 1 Bath</td>
                                        <td className="properties-list-td">$275,000</td>
                                    </tr>
                                    <tr className="properties-list-row">
                                        <td className="properties-list-td properties-list-td-address">
                                            <img className="properties-list-img" src="https://photos.zillowstatic.com/fp/3.jpg" alt="Property" />
                                            <div className="properties-list-address-text">
                                                <div className="properties-list-address-main">400 N Lasalle Dr #2007</div>
                                                <div className="properties-list-address-sub">Chicago, IL 60614</div>
                                            </div>
                                        </td>
                                        <td className="properties-list-td">2 Bed, 2 Bath</td>
                                        <td className="properties-list-td">$399,888</td>
                                    </tr>
                                    <tr className="properties-list-row">
                                        <td className="properties-list-td properties-list-td-address">
                                            <img className="properties-list-img" src="https://photos.zillowstatic.com/fp/4.jpg" alt="Property" />
                                            <div className="properties-list-address-text">
                                                <div className="properties-list-address-main">900 W Washington Blvd #PENTHOUSE W</div>
                                                <div className="properties-list-address-sub">Chicago, IL 60607</div>
                                            </div>
                                        </td>
                                        <td className="properties-list-td">5 Bed, 6 Bath</td>
                                        <td className="properties-list-td">$4,200,000</td>
                                    </tr>
                                    <tr className="properties-list-row">
                                        <td className="properties-list-td properties-list-td-address">
                                            <img className="properties-list-img" src="https://photos.zillowstatic.com/fp/5.jpg" alt="Property" />
                                            <div className="properties-list-address-text">
                                                <div className="properties-list-address-main">1749 W Roscoe St #1</div>
                                                <div className="properties-list-address-sub">Chicago, IL 60657</div>
                                            </div>
                                        </td>
                                        <td className="properties-list-td">4 Bed, 4 Bath</td>
                                        <td className="properties-list-td">$899,995</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="agent-profile-body-right">
                        <section>
                            <div id='contactus-form'>
                                <TextField fullWidth size='small' s alignItems="" placeholder="Your Name" sx={{ backgroundColor: "#ecf7f9", fontSize: "15px" }} slotProps={{ input: { style: { fontSize: "1em", size: "48px" } } }}>
                                </TextField>
                                <TextField fullWidth size='small' s alignItems="" placeholder="Your Email" sx={{ backgroundColor: "#ecf7f9", fontSize: "15px" }} slotProps={{ input: { style: { fontSize: "1em", size: "48px" } } }}>
                                </TextField>
                                <TextField fullWidth size='small' s alignItems="" placeholder="Your Phone" sx={{ backgroundColor: "#ecf7f9", fontSize: "15px" }} slotProps={{ input: { style: { fontSize: "1em", size: "48px" } } }}>
                                </TextField>
                                <TextField fullWidth multiline="true" maxRows={4} size='small' placeholder="Type your message..." sx={{ backgroundColor: "#ecf7f9" }} slotProps={{ input: { style: { fontSize: "1em", height: "116px", alignItems: "start" } } }}>
                                </TextField>
                                <Button sx={{ height: "3rem", backgroundColor: "#0073e1", color: "white", fontSize: "1rem", fontWeight: "bold", borderRadius: "4px" }}>Contact the team</Button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AgentDialog;
