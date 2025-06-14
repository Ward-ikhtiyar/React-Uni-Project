import { useState } from 'react';
import ProfileCard from './components/Profile_card/profile_card';
import'./profile_page.css'
import EditProfileDialog from '../../components/Dialogs/Profile_dialog';
import {PendingActionsOutlined,FeedbackOutlined,Person2Outlined,Person2,House,PendingActions,Logout,Feedback,Add,Archive,WorkspacePremium, WorkspacePremiumOutlined,HouseOutlined, Money, CurrencyLira, CurrencyPound, MonetizationOn, MonetizationOnOutlined, AttachMoneyOutlined, ArrowUpwardOutlined, TrendingUpOutlined, ArchiveOutlined } from '@mui/icons-material';
import AgentProperty from './components/myProperty_card/Agent_property';
import MyProperties from './requests';
import ProfileTab from './components/Side_Bar/tab';
import RequestsPage from './requests';
import ProfileInfoPage from './profile_Info';
import PropertiesPage from './Properties_page';
import SavedPropertiesPage from './Saved_properties';
import AddPropertyPage from './addProperty/addProperty';
import EasyRent from '../../components/Lottie/EasyRent';
import PlansPage from './plans/plans';
function ProfilePage(){
    const [isOpen,setIsOPen]=useState(false);
    const[tabIndex,setTabIndex]=useState(0);
    const PagesList=[ProfileInfoPage,RequestsPage,PropertiesPage,SavedPropertiesPage,PlansPage];
    const SelectedPage=PagesList[tabIndex];
    return(
        <div id='Profile-homePage'  className="HomePage" style={{}}>
            <div className='main-profile'>
                
                <div className='profile-tab'>
                    
                    <div style={{height:"3%"}}></div>
                    <EasyRent/>
                    <ProfileTab title={"Profile"} Icon={Person2} UnselectedIcon={Person2Outlined} val={tabIndex} index={0} setIndex={setTabIndex}/>
                    <ProfileTab title={"Requests"} Icon={PendingActions} UnselectedIcon={PendingActionsOutlined} val={tabIndex} index={1} setIndex={setTabIndex}/>
                    <ProfileTab title={"Properties"} Icon={House} UnselectedIcon={HouseOutlined} val={tabIndex} index={2} setIndex={setTabIndex}/>
                    <ProfileTab title={"Saved properties"} Icon={Archive} UnselectedIcon={ArchiveOutlined} val={tabIndex} index={3} setIndex={setTabIndex}/>
                    <ProfileTab title={"Subscription"} Icon={WorkspacePremium} UnselectedIcon={WorkspacePremiumOutlined} val={tabIndex} index={4} setIndex={setTabIndex}/>
                    <ProfileTab title={"Submit a complaint"} Icon={Feedback} UnselectedIcon={FeedbackOutlined} val={tabIndex} index={5} setIndex={setTabIndex}/>
                    <ProfileTab title={"Log out"} Icon={Logout} UnselectedIcon={Logout} val={tabIndex} index={6} setIndex={setTabIndex}/>
                    

                         {/* <div className='tab'>
                        <Add/>
                         Add a property</div>
                         <div className='tab'>
                        <EditDocument/>
                         Write a contract</div>
                          
                         <div className='tab'>
                        <Feedback/>
                         Submit a complaint</div>
                         <div className='tab'>
                        <Logout/>
                         Logout</div> */}
                         
                </div>
                <SelectedPage/>
                  
                
                

            </div>
            
            <EditProfileDialog open={isOpen} onClose={()=>setIsOPen(false)}/>
        </div>
    );
}

export default ProfilePage