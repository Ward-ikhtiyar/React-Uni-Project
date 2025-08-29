import AppBar from '../../Home/components/appBar';
import './show_house.css';
import { FaFire, FaMapMarkerAlt, FaCar } from 'react-icons/fa';
import { MdLayers } from 'react-icons/md';
import { GiFloorPolisher } from 'react-icons/gi';
import { setFavorite } from '../../../../API/requests';
import { useTranslation } from 'react-i18next';
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
  CurrencyExchange,
  Person
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
  const{t}=useTranslation();

  
// const property = {
//   title: "بيت الأحلام",
//   description: "منزل جميل مع كل وسائل الراحة الحديثة، قريب من كل الخدمات.",
//   isForRent: true,
//   price: 1500,
//   pointsDto: {
//     lat: 30.0444,
//     lon: 31.2357,
//   },
//   rooms: 3,
//   bathrooms: 2,
//   area: 120,
//   floorNumber: 1,
//   hasGarage: true,
//   hasGarden: true,
//   heatingType: "Gas",
//   flooringType: "Wood",
//   propertyType: "House",
//   isFloor: false,
//   agencyId: 2,
//   propertyImages: [
//     "https://picsum.photos/id/1018/600/400",
//     "https://picsum.photos/id/1015/600/400",
//     "https://picsum.photos/id/1016/600/400",
//   ],
//   location: {
//     country: "Egypt",
//     governorate: "Cairo",
//     city: "Cairo",
//     quarter: "Zamalek",
//     street: "El-Gezira St.",
//     lat: 30.0444,
//     lon: 31.2357,
//   },
//   voteScore: 4.5,
//   viewCount: 123,
//   user: {
//     id: 1,
//     username: "AhmedAli",
//     profileImage: "https://picsum.photos/50/50?random=1",
//   },
// };



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
  }, [propertyId]);

  if (!property || !property.location) {
    return <div>Loading...</div>;
  }

  
const tabTitle = [
  t('Heating'),
  t('Flooring'),
  t('Floors'),
  t('location'),
  t('Garage'),
  t('Garden'),
];

 const tabInfo=[property.heatingType,property.flooringType,property.floorNumber,`${property.location.governorate}, ${property.location.city}, ${property.location.quarter},${property.location.street}`,property.hasGarage?"Yes":"No",property.hasGarden?"Yes":"No"]; 
   const tabIcons = [
    <FaFire color='var(--app-blue)' key="heating" />,
    <GiFloorPolisher color='var(--app-blue)' key="flooring" />,
    <MdLayers color='var(--app-blue)' key="floors" />,
    <FaMapMarkerAlt color='var(--app-blue)' key="location" />,
    <FaCar color='var(--app-blue)' key="garage" />,
    <Person sx={{color:'var(--app-blue)'}} key="garden" />,
  ];
    async function handleSetfavorite(){
        await setFavorite(propertyId);
        const fetchisFavorite=await isFavorite(propertyId);
        setIsFavorite(fetchisFavorite);
    }

  return (
    <div className='HomePage' style={{Height:'240vh'}}>
      <AppBar/>
      <PhotoSection
        name={property.title}
        location={`${property.location.quarter}, ${property.location.street}`}
        commerce={property.isForRent ? "Rent" : "For Sale"}
        Housetype={property.propertyType}
        photos={property.propertyImages}
        isFavorite={isAFavorite}
        price={`${property.price}${property.isForRent  ? " /mo" : ""}`}
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
          {/* <InfoComp
                  title="Price"
                  Icon={AttachMoneyOutlined}
                  info={`${property.price}${property.isForRent === "rent" ? " /mo" : ""}`}/> */}
                  <InfoComp
                  title="Location"
                  Icon={LocationOnOutlined}
                  info={tabInfo[3]}/>

        </div>
        <p className='header'>Description</p>
        <div style={{color:'var(--app-font)'}} className='description'>{property.description}</div>
        <p className='header'>Additional Details</p>
        <div style={{width:'100vw',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <div className='info-tab'>
          {
            tabInfo.map((info,index)=>(
              index!=3?
              <InfoTab TabIcon={tabIcons[index]} index={index} title={tabTitle[index]} subtitle={info}/>:<></>
            ))
          }
        </div>
      <PropertyMap location={property.location}/>
        
        </div>
        <p className='header'>owner</p>
        <div className='owner-info'>
          <div className='owner-info-image'></div>
            <div onClick={()=>{setOpen(true)}}>{property.agency.username}</div>
        </div>
      </div>
      <div style={{height:'10vh'}}></div>
      <OwnerInfoDialog id={property.agency.id} open={open} setOpen={setOpen}/>
      <div style={{height:'0.5vh'}}></div>
    </div>
  );
}

export default ShowHouse;
