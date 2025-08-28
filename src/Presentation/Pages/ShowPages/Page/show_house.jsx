import AppBar from '../../Home/components/appBar';
import './show_house.css';
import { setFavorite } from '../../../../API/requests';
import {
  BedOutlined,
  FavoriteBorderOutlined,
  LocationOnOutlined,
  Share,
  ShowerOutlined,
  AreaChartOutlined,
  GarageOutlined,
  YardOutlined,
  Visibility,
  AttachMoneyOutlined,
  CurrencyExchange
} from '@mui/icons-material';
import PhotoSection from '../components/photo_section/photo_section';
import InfoComp from '../components/Primary_info/infoComp';
import InfoTab from '../components/Primary_info/infoTab';
import { useEffect, useState } from 'react';
import { getDetails, isFavorite } from '../../../../API/requests';
import { useSearchParams } from 'react-router-dom';
import OwnerInfoDialog from '../../../../Presentation/components/Dialogs/users_dialogs/owner_info_dialog';
import PropertyMap from '../components/property_location.jsx/property_map';
// import {REMap} from '../../Search-Proporties/components/RE-Map/RE-Map';

function ShowHouse() {
  const [params] = useSearchParams();
  const [property, setProperty] = useState(null);
  const [isAFavorite,setIsFavorite]=useState(false);
  const propertyId = params.get("id");
  const [open,setOpen]=useState(false);

  useEffect(() => {
    async function fetchProperty() {
      try {
        const returnedData = await getDetails(propertyId);
        setProperty(returnedData);
        console.log(returnedData);
        console.log(returnedData.propertyImages)
        const fetchisFavorite=await isFavorite(propertyId);
        setIsFavorite(fetchisFavorite);
      } catch (error) {
        console.error("Failed to fetch property:", error);
      }
    }

    if (propertyId) {
      fetchProperty();
    }
  }, propertyId);

  if (!property || !property.location) {
    return <div>Loading...</div>;
  }
  const tabTitle=["Heating","Flooring","Floors","location","Garage","Garden"];
  const tabInfo=[property.heatingType,property.flooringType,property.floorNumber,`${property.location.governorate}, ${property.location.city}, ${property.location.quarter},${property.location.street}`,property.hasGarage?"Yes":"No",property.hasGarden?"Yes":"No"];

    async function handleSetfavorite(){
        await setFavorite(propertyId);
        const fetchisFavorite=await isFavorite(propertyId);
        setIsFavorite(fetchisFavorite);
    }

  return (
    <div className='HomePage' style={{Height:'240vh'}}>
      <PhotoSection
        name={property.title}
        location={`${property.location.quarter}, ${property.location.street}`}
        commerce={property.isForRent ? "Rent" : "For Sale"}
        Housetype={property.propertyType}
        photos={property.propertyImages}
        isFavorite={isAFavorite}
        setFavorite={handleSetfavorite}   
        voteScore={property.voteScore}
        id={propertyId}
      />
      <div className='details-section'>
        <div className='overview'>Overview</div>
        <div className='initial-info'>
          <InfoComp title="Bedrooms" Icon={BedOutlined} info={`${property.rooms}`} />
          <InfoComp title="Bathrooms" Icon={ShowerOutlined} info={`${property.bathrooms}`} />
          <InfoComp title="Area" Icon={AreaChartOutlined} info={`${property.area} m^2`} />
          <InfoComp title="Views" Icon={Visibility} info={`${property.viewCount}`} />
          <InfoComp
                  title="Price"
                  Icon={AttachMoneyOutlined}
                  info={`${property.price}${property.isForRent === "rent" ? " /mo" : ""}`}/>

        </div>
        <p className='header'>Description</p>
        <div className='description'>{property.description}</div>
        <p className='header'>Additional Details</p>
        <div className='info-tab'>
          {
            tabInfo.map((info,index)=>(
              <InfoTab index={index} title={tabTitle[index]} subtitle={info}/>
            ))
          }
        </div>
        <p className='header'>owner</p>
        <div className='owner-info'>
          <div className='owner-info-image'></div>
            <div onClick={()=>{setOpen(true)}}>{property.user.username}</div>
        </div>
      </div>
      <div style={{height:'10vh'}}></div>
      <OwnerInfoDialog id={property.user.id} open={open} setOpen={setOpen}/>
      <p className='header'>loaction</p>
      <PropertyMap location={property.location}/>
      <div style={{height:'0.5vh'}}></div>
    </div>
  );
}

export default ShowHouse;
