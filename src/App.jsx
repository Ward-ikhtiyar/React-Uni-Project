import './App.css';

import RE_Agent from './Presentation/Pages/Search-Agent/Search-Page';
import RE_Search from './Presentation/Pages/Search-Proporties/Pages/RE-Search';
import ShowHouse from './Presentation/Pages/ShowPages/Page/show_house';
import HomePage from './Presentation/Pages/Home/Pages/HomePage';
import Login_page from './Presentation/Pages/Auth/Auth_page';
import PaymentPlans from './Presentation/Pages/PaymentPlans/PaymentPlans';
import ContactUs from './Presentation/Pages/ContactUs/ContactUs';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProfilePage from './Presentation/Pages/Profile/profile_page';
// import AddPropertyPage from './Presentation/Pages/Profile/addProperty/addProperty';
import TrendingCard from './Presentation/Pages/Home/components/trendingCard';
import SearchPage from './Presentation/Pages/Search-Agent/Search-Page';
import SearchAgent from './Presentation/Pages/Search-Agent/Search-Agent';
function App() {
  
  return (
    <>
    {/* <ContactUs/> */}
      {/* <RE_Agent/> */}
      {/* <PaymentPlans/> */}
    {/* <RE_Search /> */}
      {/* <HomePage/> */}
      {/* <ShowHouse/> */}
    <Router>
      <Routes>
        <Route path='/' element={<SearchAgent/>}> </Route>
        <Route path='/Properties' element={<RE_Search/>}></Route>
        <Route path='/Details' element={<ShowHouse/>}></Route>
        <Route path='/Profile' element={<ProfilePage/>}></Route>        
      </Routes>
    </Router>
    </>
    
  )
}
export default App;