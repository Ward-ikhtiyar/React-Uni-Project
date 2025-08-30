import './App.css';
import './Presentation/components/Hero/HeroSection.css';
import ShowHouse from './Presentation/Pages/ShowPages/Page/show_house';
import HomePage from './Presentation/Pages/Home/Pages/HomePage';
import Login_page from './Presentation/Pages/Auth/Auth_page';
import PaymentPlans from './Presentation/Pages/PaymentPlans/PaymentPlans';
import ContactUs from './Presentation/Pages/ContactUs/ContactUs';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProfilePage from './Presentation/Pages/Profile/profile_page';
// // import AddPropertyPage from './Presentation/Pages/Profile/addProperty/addProperty';
import TrendingCard from './Presentation/Pages/Home/components/trendingCard';
import SearchAgent from './Presentation/Pages/Search-Agent/Search-Agent';
import AdminLogin from './Presentation/Pages/Admin/login_page';
import AdminDashBoard from './Presentation/Pages/Admin/dashboard';
import ComplaintsPage from './Presentation/Pages/Complaints/complaints';
import AdminPropertyDetails from './Presentation/Pages/Admin/Properties/admin_property_details';
import RE_Search from './Presentation/Pages/Display/Pages/RE-Search';
import PropertyPage from './Presentation/Pages/ShowPages/Page/show_house_alt';
import './utils/i18n';
import { useTranslation } from 'react-i18next';
import AgentDialog from './Presentation/Pages/Agent/Agent';
import AgentProfile from './Presentation/Pages/AgentProfile/AgentProfile';
import AgentAboutMe from './Presentation/Pages/AgentAboutMe/AgentAboutMe';
import ErrorPage from './Presentation/Pages/Error/Error';
import NoExist from './Presentation/Pages/Error/NoExist';
import AddPropertyPage from './Presentation/Pages/Profile/AddProperty/addProperty';
import AgentPropertyDetails from './Presentation/Pages/Profile/agent_property_detail/agent_property_details';
import { useEffect } from 'react';
function App() {
  const {t,i18n}=useTranslation();
useEffect(() => {
    const lang = localStorage.getItem('lang') || 'en';
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, []);

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
          <Route path='/' element={<HomePage/>}> </Route>
          <Route path='/Properties' element={<RE_Search />}></Route>
          <Route path='/Agents' element={<SearchAgent />}></Route>
          <Route path='/Details' element={<ShowHouse />}></Route>
          <Route path='/AgentDetails' element={<AgentDialog />}></Route>
          <Route path='/AgentAboutMe' element={<AgentAboutMe />}></Route>
          <Route path='/AgentDetails/SendProperty' element={<AddPropertyPage/>}></Route>
          <Route path='/Profile' element={<ProfilePage />}></Route>
          <Route path='/Complaints' element={<ComplaintsPage/>}></Route> 
          <Route path='/Error' element={<ErrorPage/>}></Route>
          <Route path='/NotFound' element={<NoExist/>}></Route>
          <Route path='/Admin' element={<AdminLogin />}></Route>
          <Route path='/ContactUs' element={<ContactUs />}></Route>
          <Route path='/Dashboard' element={<AdminDashBoard />}></Route>
          <Route path='/Admin/property' element={<AdminPropertyDetails/>} />
          <Route path='/Agent/property' element={<AgentPropertyDetails/>} />

        </Routes>
      </Router>
    </>

  )
}
export default App;