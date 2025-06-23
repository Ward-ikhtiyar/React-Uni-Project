import { useEffect, useState } from "react";
import './owner_dialog.css';
import { getOwnerInfo } from "../../../../API/other_requests";
import { Dialog, DialogTitle, DialogContent, CircularProgress } from "@mui/material";
import ErrorSnackbar from "../../snackBar/erorr_snack";
import { PersonOutline, PhoneOutlined, LocationOnOutlined } from "@mui/icons-material";
import TrendingCard from "../../../Pages/Home/components/trendingCard";
function OwnerInfoDialog({id, open, setOpen}){
    const [owner, setOwner] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (open && id) {
            getOwnerInfoFunction();
        }
    }, [id, open]);

    async function getOwnerInfoFunction() {
        try {
            setLoading(true);
            setError(null);
            const response = await getOwnerInfo(id);
            if (response) {
                setOwner(response);
                console.log(response);
            } else {
                setError("Could not fetch owner information");
            }
        } catch (e) {
            setError("Error loading owner information");
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle >
                    <div className="Main-title">Owner Info</div>
                </DialogTitle>
                <DialogContent>
                    <div className="dialog-body">
                        {loading ? (
                            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                                <CircularProgress style={{ color: 'var(--app-blue)' }} />
                            </div>
                        ) : owner ? (
                            <div className="user-info">
                                <div className="info-row">
                                <img style={{width:'120px',height:'120px'}} src={'public/assets/images/man.svg'} alt="Owner Profile" />
                                <div className="owner-information">
                                    <div className="owner-information-item">
                                        <div className="info-label"><PersonOutline/></div>
                                        <div className="info-value">{owner.username}</div>
                                    </div>
                                    <div className="owner-information-item">
                                        <div className="info-label"><PhoneOutlined/></div>
                                        <div className="info-value">{owner.phone}</div>
                                    </div>
                                    <div className="owner-information-item">
                                        <div className="info-label"><LocationOnOutlined/></div>
                                        <div className="info-value">{owner.location.governorate}</div>
                                    </div>
                                    
                                </div>
                                
                                </div>
                                
                                
                            </div>
                        ) : (
                            <div className="error-message">
                                No owner information available
                            </div>
                        )}
                        {!loading?<>
                        <p className="Main-title">owner properties</p>
                        <div className="owner-properties-row">
                            {owner.properties.map((property,index)=>
                            
                            <TrendingCard key={index} property={property}/>
                            
                            
                            )}
                        </div>
                        </>:
                        <div className="error-message">
                            No properties available
                        </div>}
                    </div>
                </DialogContent>
            </Dialog>
            <ErrorSnackbar 
                open={!!error} 
                handleClose={() => setError(null)} 
                title={error || ''} 
            />
        </>
    );
}

export default OwnerInfoDialog;