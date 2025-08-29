import ProfileTab from '../Profile/components/Side_Bar/tab';
import './dashboard.css'
import { useState } from 'react';
import AdminProperties from './Properties/admin_properties';
import {Insights,InsightsOutlined ,Feed,FeedOutlined,Logout,AdminPanelSettingsOutlined,HouseOutlined,House,PendingActions,PendingActionsOutlined,Dashboard,DashboardOutlined,Person,SupervisorAccountOutlined,SupervisorAccount, AdminPanelSettings, PersonOutline,CreditCard,CreditCardOutlined } from '@mui/icons-material';
import EasyRent from '../../components/Lottie/EasyRent';
import AdminsPage from './super_admin/Admins/admins';
import AdminStatistics from './statistics/admin_statistics';
import { useNavigate } from 'react-router-dom';
import AdminPlansPage from './super_admin/plans/plans';
import AdminUsers from './users/users';
import AdminComplaintsPage from './complaints/admin_complaints';
function AdminDashBoard(){
  
  const navigate=useNavigate();
  if(localStorage.getItem('token')===null){
    window.location.href='/Admin';
  }
  
        const pagesList=[AdminStatistics,AdminProperties,AdminUsers,AdminsPage,AdminPlansPage,AdminComplaintsPage];
        const[tabIndex,setTabIndex]=useState(0);
        let SelectedPage=pagesList[tabIndex];
        let isSuperAdmin=localStorage.getItem('role')==='super_admin';
    return(
        <div className='admin-dashboard'>
         <div className='admin-tab'>
            <div style={{height:"40px"}}></div>
              <div style={{display:"flex",alignItems:'center'}}>
                <EasyRent/> 
                <AdminPanelSettingsOutlined sx={{color:'var(--app-blue)', scale:'130%'}}/>
              </div>
            <div style={{height:"20px"}}></div>
              <p  className='tabs-title'>App</p>
            <ProfileTab title={"Dashboard"} Icon={Dashboard} UnselectedIcon={DashboardOutlined} val={tabIndex} index={0} setIndex={setTabIndex}/>
            <ProfileTab title={"Properties"} Icon={House} UnselectedIcon={HouseOutlined} val={tabIndex} index={1} setIndex={setTabIndex}/>
            <ProfileTab title={"Users"} Icon={Person} UnselectedIcon={PersonOutline} val={tabIndex} index={2} setIndex={setTabIndex}/>

          {isSuperAdmin && (
          <>
            <p className='tabs-title'>Super-Admin</p>
            <ProfileTab title="Admins" Icon={AdminPanelSettings} UnselectedIcon={AdminPanelSettingsOutlined} val={tabIndex} index={3} setIndex={setTabIndex} />
            <ProfileTab title="Plans" Icon={CreditCard} UnselectedIcon={CreditCardOutlined} val={tabIndex} index={4} setIndex={setTabIndex} />
            <ProfileTab title="Complaints" Icon={Feed} UnselectedIcon={FeedOutlined} val={tabIndex} index={5} setIndex={setTabIndex} />
            </>  )}
            <div onClick={()=>{localStorage.clear('token');navigate('/Admin',{replace:true})}} style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}}>
            <ProfileTab title={"Log out"} Icon={Logout} UnselectedIcon={Logout} val={tabIndex} index={-1} setIndex={setTabIndex}/>
            </div>
            </div>    
            <SelectedPage/>
        </div>
    );
}
export default AdminDashBoard;

