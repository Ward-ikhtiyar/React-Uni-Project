import './App.css';

import RE_Search from './Presentation/Pages/Display/Pages/RE-Search';
import ShowHouse from './Presentation/Pages/ShowPages/Page/show_house';
import HomePage from './Presentation/Pages/Home/Pages/HomePage';
import Login_page from './Presentation/Pages/Auth/Auth_page';
import { Favorite } from '@mui/icons-material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
function App() {

  return (
    <>
          <RE_Search />
      
      {/* <HomePage/> */}
      {/* <ShowHouse/> */}
    </>
  )
}

export default App
