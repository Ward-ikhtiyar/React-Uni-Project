import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import Custom_Chip from '../../Profile/components/Chips/chip';
import AgentProperty from '../../Profile/components/myProperty_card/Agent_property';
import CreatePropertyDialog from '../../../components/Dialogs/CreateProperty_Dialog';
import ManagePropertyDialog from '../../../components/Dialogs/manage_property_dialog';
import { getAcceptedProperties, getAgentAcceptedProperties } from '../../../../API/requests';
import { Link } from 'react-router-dom';
import AddPropertyPage from '../../Profile/addProperty/addProperty';

function ListingTab() {
    const [chipVal, setChipVal] = useState(0);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0);
    const [dialog, setDialog] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState({});
    const [loading, setIsLoading] = useState(false);
    const [properties, setProperties] = useState([]);

    async function handleGetProperties() {
        setIsLoading(true);
        let fetchedProperties = await getAgentAcceptedProperties();
        if (chipVal === 1) {
            fetchedProperties = fetchedProperties.filter(el => el.status === "pending");
        } else if (chipVal === 2) {
            fetchedProperties = fetchedProperties.filter(el => el.status === "accepted");
        }
        setProperties(fetchedProperties);
        setIsLoading(false);
    }

    useEffect(() => {
        handleGetProperties();
    }, [chipVal]);

    if (!properties || properties.length === 0) {
        return (
            <div>
                <div className="section-header">
                    <h2>My Property Listings</h2>
                    <Link to={AddPropertyPage}  >
                        Add a property
                    </Link>
                </div>
                <div className="no-results-container">

                    <div className="no-results-icon">🏠</div>
                    <Typography variant="h6" className="no-results-text">
                        "No properties available"
                    </Typography>
                </div>
                <CreatePropertyDialog
                open={open}
                onClose={() => setOpen(false)}
            />
            </div>
        );
    }

    // if (!open) {
        return (
            <div className="content-section">
                <div className="section-header">
                    <h2>My Property Listings</h2>
                    {/* <Link to={AddPropertyPage} className='colored-button' >
                        Add a property
                    </Link> */}
                </div>

                <div className='chips-row'>
                    <Custom_Chip Click={setChipVal} title={"All"} index={0} val={chipVal} />
                    <Custom_Chip Click={setChipVal} title={"Pending"} index={1} val={chipVal} />
                    <Custom_Chip Click={setChipVal} title={"Accepted"} index={2} val={chipVal} />
                </div>

                <div className='profile-body'>
                    {properties.map((element, index) => (
                        <AgentProperty
                            setProperty={setSelectedProperty}
                            setId={setId}
                            setOpen={setDialog}
                            key={index}
                            property={element}
                        />
                    ))}
                </div>

                {dialog && (
                    <ManagePropertyDialog
                        property={selectedProperty}
                        setOpen={setOpen}
                        id={id}
                        open={dialog}
                        onClose={() => setDialog(false)}
                    />
                )}
            </div>
        );
    // }

    // if (open) {
    //     return (
    //         <CreatePropertyDialog
    //             open={open}
    //             onClose={() => setOpen(false)}
    //         />
    //     );
    // }
}

export default ListingTab;
