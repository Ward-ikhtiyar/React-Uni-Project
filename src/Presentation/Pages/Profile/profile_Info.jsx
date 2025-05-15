
import './profile_info.css'
import { Person,Phone,LocationOn,Edit,HouseOutlined,AttachMoneyOutlined,EditDocument,TrendingUpOutlined, Favorite, Visibility } from '@mui/icons-material';
import ProfileCard from './components/Profile_card/profile_card';
import EditProfileDialog from '../../components/Dialogs/Profile_dialog';
import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import { TokenAxios } from '../../../API/tokenAxios'
function ProfileInfoPage(){
    const [isOpen,setIsOPen]=useState(false);
    const [isLoaded,setIsLoaded]=useState(false);
    const [phone, setPhone] = useState('');
const [userName, setUserName] = useState('');
const [location, setLocation] = useState('');
    async function getProfile() {
        let response=await TokenAxios.get(EndPoints.User.Me);
        let data=response.data;
        if(data){
            console.log(data);
            console.log("succes my nigger brolly");
            console.log(data.phone);
            setPhone(`${data.phone}`);
        setUserName(`${data.username}`);
        setLocation(`${data.location.country},${data.location.city}`);
            setIsLoaded(true);
        }
    }
    if(isLoaded===false){
        getProfile();
        return(<div className='profile-info' style={{display:'flex', justifyContent:'center' ,alignItems:'center'}}>
                    <CircularProgress/>
        </div>);
    }
    if(isLoaded===true){
    return(
        <div className='profile-info'>
                
                
                    <div className='property-tile'>
                        <div style={{width:'120px'}}></div>
                        <div className='profile-pic'>ward</div>
                        <div style={{width:'15px'}}></div>
                        <div className='username-number'>
                            <div style={{height:'60px'}}></div>
                            <div className='username'>
                                <Person/>
                                {userName}</div>
                                
                            <div className='number'>
                                <Phone/>
                                {phone}</div>
                                <div className='username'>
                                    <LocationOn/>
                                    {location}
                                </div>
                        </div>
                         <div className='edit-section'>
                            <button className='edit-button-tile' onClick={()=>setIsOPen(true)}>
                                <Edit/>
                                Edit Profile</button>
                            </div> 
                        
                    </div>
                    {/* <AgentProperty/> */}
                   <div className='profilecard-row'>
                   <ProfileCard Icon={HouseOutlined} title={"Properties"} value={'12'}/>
                   <ProfileCard Icon={AttachMoneyOutlined} title={"All-Time Earnings"} value={'25k'}/>
                   <ProfileCard Icon={Visibility} title={"Views"} value={'25k'}/>
                    
                   </div>
                   <div className='profilecard-row'>
                    <ProfileCard Icon={EditDocument} title={"Contracts"} value={"6"}/>
                    <ProfileCard Icon={TrendingUpOutlined } title={"Monthly Revenue"} value={'25k'}/> 
                    <ProfileCard Icon={Favorite} title={"Likes"} value={'220k'}/>
                    </div>
                    
                   
                   
                   <EditProfileDialog phone={phone} name={userName} open={isOpen} onClose={()=>setIsOPen(false)}/>
                 </div> 
    );}
}
export default ProfileInfoPage