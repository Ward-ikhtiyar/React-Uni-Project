import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './admin_property_details.css';
import { adminGetPropertyDetails,adminAcceptProperty } from '../../../../API/admin_requests';
import { ArrowBackIos } from '@mui/icons-material';
import ErrorSnackbar from '../../../components/snackBar/erorr_snack';
import AcceptPropertyDialog from '../../../components/Dialogs/Admin/accept_property_dialog';
import RejectPropertyDialog from '../../../components/Dialogs/Admin/reject_property_dialog';

function AdminPropertyDetails() {
  if(!localStorage.getItem('token') || !['admin', 'super_admin'].includes(localStorage.getItem('role'))) {
    window.location.href = '/Admin';
    return null;
  }

  const [params] = useSearchParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAcceptLoading,setIsAcceptLoading]=useState(false);
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
        const response = await adminGetPropertyDetails(propertyId);
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
    user,
    propertyImages
  } = property;
  

  return (
    <div className="admin-container" style={{ display: 'flex', gap: '20px' }}>
      <div onClick={()=>{navigate(-1,{replace:true})}}>
        <ArrowBackIos className='admin-arrow-back' />
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div className="admin-photos">
          <h2 className="admin-section-title">Photos</h2>
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
          <h3>Property Details</h3>
          <table className="admin-details-table" style={{ width: '100%' }}>
            <tbody>
              <tr><td>Title</td><td>{title}</td></tr>
              <tr><td>Status</td><td>{status}</td></tr>
              <tr><td>Owner</td><td>{user.username}</td></tr>
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
          <button onClick={()=>{setOpenRejectDialog(true)}} className="admin-reject-button">Reject</button>
          <button onClick={()=>{setOpenAcceptDialog(true)}} className="admin-accept-button">Accept</button>
        </div>
      </div>
      <AcceptPropertyDialog open={openAcceptDialog} onClose={()=>{setOpenAcceptDialog(false)}} id={propertyId} />
      <RejectPropertyDialog open={openRejectDialog} onClose={()=>{setOpenRejectDialog(false)}} id={propertyId} />
    </div>
  );
}

export default AdminPropertyDetails;
