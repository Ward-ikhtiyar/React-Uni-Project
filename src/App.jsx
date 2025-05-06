import './App.css';

import ShowHouse from './Presentation/Pages/ShowPages/Page/show_house';
import HomePage from './Presentation/Pages/Home/Pages/HomePage';
import Login_page from './Presentation/Pages/Auth/Auth_page';
import { Favorite } from '@mui/icons-material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
function App() {
  

  return (
    <>

    <HomePage/>
      {/* <ShowHouse/> */}
    </>
  )
}

export default App
{/* <MapContainer center={[33.5138, 36.2765]} zoom={13} style={{ height: "400px", width: "100%" }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker  position={[33.5138, 36.2765]} eventHandlers={{click:()=>{}}}>
      <Popup>Dubai</Popup>
    </Marker>
  </MapContainer> */}
    {/* <div className='property-card'>
      
      <div className='property-pic'>
        <div style={{width:"100%",display:'flex', justifyContent:"end",  backgroundColor:"transparent", color:"white"}}>
        <Favorite  style={{padding:"10px"}}></Favorite>

        </div>
      </div>
      <div className='price-favorite'>2,300$
      </div>
      <div className='info'>4 beds<hr></hr>2 ba<hr></hr>1,535 sqft <hr></hr> House for sale
      </div>
      <div className='info'>
        Damascus,Qudsaya
      </div>
    </div> */}