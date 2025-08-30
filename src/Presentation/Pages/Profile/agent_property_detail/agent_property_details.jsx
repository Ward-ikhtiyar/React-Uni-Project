import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './agent_property_details.css';
import { adminGetPropertyDetails,adminAcceptProperty } from '../../../../API/admin_requests';
import { ArrowBackIos } from '@mui/icons-material';
import ErrorSnackbar from '../../../components/snackBar/erorr_snack';
import AcceptPropertyDialog from '../../../components/Dialogs/Admin/accept_property_dialog';
import RejectPropertyDialog from '../../../components/Dialogs/Admin/reject_property_dialog';
import { adminHideProperty } from '../../../../API/admin_requests';
import { CircularProgress } from '@mui/material';
import { agentAcceptProperty, agentRejectProperty, getDetails } from '../../../../API/requests';
function AgentPropertyDetails() {
  if(!localStorage.getItem('token') || !['agency'].includes(localStorage.getItem('role'))) {
    window.location.href = '/';
    return null;
  }

  const [params] = useSearchParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[rejectLoading,setRejectLoading]=useState(false);
  const [acceptLoading,setAcceptLoading]=useState(false);
  const [openSnackbar,setOpenSnackbar]=useState(false);
  const [snackBarTitle,setSnackBarTitle]=useState("");
  const handleCloseSnackbar=()=>{
    setOpenSnackbar(false);
  }
  const [openAcceptDialog,setOpenAcceptDialog]=useState(false);
  const [openRejectDialog,setOpenRejectDialog]=useState(false);
  
  
  const propertyId = params.get("id");
  const navigate=useNavigate();

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await getDetails(propertyId);
        setProperty(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, []);

  if (loading) return <div className="admin-no-data">Loading...</div>;
  if (error) return <div className="admin-no-data">Error: {error}</div>;
  if (!property) return <div className="admin-no-data">No property data found.</div>;

  async function rejectProperty() {
    try{
      setRejectLoading(true);
    let response=await agentRejectProperty(propertyId);
      setRejectLoading(false);
      navigate('/profile',{replace:true})         
  }
    catch(e){
      setRejectLoading(false)
      setError("an error occured")
    }
  }

  async function acceptProperty() {
    try{
      setAcceptLoading(true);
    let response=await agentAcceptProperty(propertyId);
      setAcceptLoading(false);
      navigate('/profile',{replace:true})         
  }
    catch(e){
      setAcceptLoading(false)
      setError("an error occured")
    }
  }

  const {
    title,
    price,
    description,
    isForRent,
    status,
    rooms,
    bathrooms,
    area,
    isFloor,
    floorNumber,
    hasGarage,
    hasGarden,
    propertyType,
    heatingType,
    flooringType,
    location,
    agency,
    propertyImages
  } = property;
  
  return (
    <div className='HomePage'>
    <div className="admin-container" style={{ display: 'flex', gap: '20px' }}>
      <div onClick={()=>{navigate('/Profile',{replace:true})}}>
        <ArrowBackIos className='admin-arrow-back' />
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div className="admin-photos">
          <h2 style={{color:'var(--app-font)'}} className="admin-section-title">Photos</h2>
          <div className="admin-photo-grid">
            {propertyImages?.length > 0 ? (
              propertyImages.map((url, index) => (
                <img
                  crossOrigin="anonymous"
                  key={index}
                  src={`http://localhost:3000/property/images/${url}`}
                  alt={`Property ${index+1}`}
                  className="admin-photo"
                />
              ))
            ) : (
              <p className="admin-no-photos">No photos available.</p>
            )}
          </div>
        </div>

        <div className="admin-price" style={{ marginTop: '20px', fontSize: '24px', fontWeight: 'bold' }}>
          ${price} {isForRent ? '/ month (Rent)' : '(Sale)'}
        </div>

        <div className="admin-section" style={{ marginTop: '20px' }}>
          <h3>Description</h3>
          <p className="admin-description">{description}</p>
        </div>
      </div>


      <div style={{ flex: 1 }}>
        <div className="admin-details">
          <h3 style={{color:'var(--app-font)'}}>Property Details</h3>
          <table className="admin-details-table" style={{ width: '100%' }}>
            <tbody>
              <tr><td>Title</td><td>{title}</td></tr>
              <tr><td>Status</td><td>{status}</td></tr>
              <tr><td>Owner</td><td>{agency.username}</td></tr>
              <tr><td>Type</td><td>{propertyType}</td></tr>
              <tr><td>Rooms</td><td>{rooms}</td></tr>
              <tr><td>Bathrooms</td><td>{bathrooms}</td></tr>
              <tr><td>Area</td><td>{area} m²</td></tr>
              <tr><td>Flooring</td><td>{flooringType}</td></tr>
              <tr><td>Heating</td><td>{heatingType}</td></tr>
              {isFloor && <tr><td>Floor Number</td><td>{floorNumber}</td></tr>}
              <tr><td>Garage</td><td>{hasGarage ? 'Yes' : 'No'}</td></tr>
              <tr><td>Garden</td><td>{hasGarden ? 'Yes' : 'No'}</td></tr>
              <tr><td>Country</td><td>{location?.country}</td></tr>
              <tr><td>Governorate</td><td>{location?.governorate}</td></tr>
              <tr><td>City</td><td>{location?.city}</td></tr>
              {location?.quarter && <tr><td>Quarter</td><td>{location.quarter}</td></tr>}
              <tr><td>Street</td><td>{location?.street}</td></tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', gap: '15px',justifyContent:'end' }}>
          <button onClick={()=>{rejectProperty()}} className="admin-reject-button">{rejectLoading?<CircularProgress/>:`Reject`}</button>
          <button  onClick={()=>{acceptProperty()}} className="admin-accept-button">{acceptLoading?<CircularProgress/>:`Accept`}</button>

        </div>
      </div>
    </div>
</div>
  );
}

export default AgentPropertyDetails;
