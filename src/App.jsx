import './App.css';

import RE_Agent from './Presentation/Pages/Search-Agent/Search-Page';
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
import AdminLogin from './Presentation/Pages/Admin/login_page';
import AdminDashBoard from './Presentation/Pages/Admin/dashboard';

import AdminPropertyDetails from './Presentation/Pages/Admin/Properties/admin_property_details';
import RE_Search from './Presentation/Pages/Display/Pages/RE-Search';
import PropertyPage from './Presentation/Pages/ShowPages/Page/show_house_alt';
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}> </Route>
        <Route path='/Properties' element={<RE_Search/>}></Route>
        <Route path='/Agents' element={<SearchAgent/>}></Route>
        <Route path='/Details' element={<ShowHouse/>}></Route>
        <Route path='/Profile' element={<ProfilePage/>}></Route> 
        <Route path='/Admin' element={<AdminLogin/>}></Route> 
        <Route path='/Dashboard' element={<AdminDashBoard/>}></Route>   
        <Route path='/Admin/property' element={<AdminPropertyDetails/>}/>    
      </Routes>
    </Router>
  )
}
export default App;