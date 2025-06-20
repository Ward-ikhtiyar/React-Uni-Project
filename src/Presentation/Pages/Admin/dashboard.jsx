import ProfileTab from '../Profile/components/Side_Bar/tab';
import './dashboard.css'
import { useState } from 'react';
import AdminProperties from './Properties/admin_properties';
import { Feed,FeedOutlined,Logout,AdminPanelSettingsOutlined,HouseOutlined,House,PendingActions,PendingActionsOutlined,Dashboard,DashboardOutlined,Person } from '@mui/icons-material';
import EasyRent from '../../components/Lottie/EasyRent';
import AdminsPage from './super_admin/Admins/admins';
import AdminStatistics from './statistics/admin_statistics';
function AdminDashBoard(){
        const pagesList=[AdminStatistics,AdminsPage,AdminProperties];
        const[tabIndex,setTabIndex]=useState(0);
        let SelectedPage=pagesList[tabIndex];
    return(
        <div className='admin-dashboard'>
         <div className='admin-tab'>
            <div style={{height:"40px"}}></div>
              <div style={{display:"flex",alignItems:'center'}}>
                <EasyRent/> 
                <AdminPanelSettingsOutlined sx={{color:'var(--app-blue)', scale:'130%'}}/>
              </div>
            <div style={{height:"20px"}}></div>
            <ProfileTab title={"Dashboard"} Icon={Dashboard} UnselectedIcon={DashboardOutlined} val={tabIndex} index={0} setIndex={setTabIndex}/>
            <ProfileTab title={"Admins"} Icon={Person} UnselectedIcon={Person} val={tabIndex} index={1} setIndex={setTabIndex}/>
            <ProfileTab title={"Properties"} Icon={House} UnselectedIcon={HouseOutlined} val={tabIndex} index={2} setIndex={setTabIndex}/>
            <ProfileTab title={"Contracts"} Icon={PendingActions} UnselectedIcon={PendingActionsOutlined} val={tabIndex} index={3} setIndex={setTabIndex}/>
            <ProfileTab title={"FeedBack"} Icon={Feed} UnselectedIcon={FeedOutlined} val={tabIndex} index={4} setIndex={setTabIndex}/>
            <ProfileTab title={"Log out"} Icon={Logout} UnselectedIcon={Logout} val={tabIndex} index={5} setIndex={setTabIndex}/>
            
            </div>    
            <SelectedPage/>
        </div>
    );
}
export default AdminDashBoard;