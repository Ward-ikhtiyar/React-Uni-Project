
import './profile_info.css'
import { Person, Phone, LocationOn, Edit, HouseOutlined, AttachMoneyOutlined, EditDocument, TrendingUpOutlined, Favorite, Visibility } from '@mui/icons-material';
import ProfileCard from './components/Profile_card/profile_card';
import EditProfileDialog from '../../components/Dialogs/Profile_dialog';
import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import { TokenAxios } from '../../../API/tokenAxios'
import EndPoints from '../../../API/endPoints';

function ProfileInfoPage() {
    const [isOpen, setIsOPen] = useState(false);
    const [viewsCount, setViewsCount] = useState(0);
    const [votesCount, setVotesCount] = useState(0);
    const [contractsCount, setContractsCount] = useState(0);
    const [propertiesCount, setPropertiesCount] = useState(0);
    const [earningsCount, setEarningsCount] = useState(0);
    const [monthlyRevenueCount, setMonthlyRevenueCount] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [phone, setPhone] = useState('');
    const [userName, setUserName] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');
    async function getProfileImg(Img) {
        let response = await TokenAxios.get(`${EndPoints.User.getImg}${Img}`, { responseType: 'blob' });
        let data = response.data
        if (data) {
            setImage(URL.createObjectURL(response.data));
        }

    }
    async function getProfile() {
        console.log("we weird af bruddha")
        let response=await TokenAxios.get(EndPoints.User.Me);
        let data=response.data;
        if(data){
            console.log(data);
            if(data.planId===null){
                console.log(data.planId);
                localStorage.setItem("plan",'none');
                localStorage.setItem('role',data.userType);
            }
            console.log();

            console.log(data.phone);
            setViewsCount(data.totalViewCount);
            setVotesCount(data.totalVoteScore);
            setPhone(`${data.phone}`);
            setUserName(`${data.username}`);
            setLocation(`${data.location.country},${data.location.city}`);
            setIsLoaded(true);
    //    if(!localStorage.getItem('token')) localStorage.setItem("token", data.accessToken);
    //     localStorage.setItem("number", data.phone);
    //    if(!localStorage.getItem('role')) localStorage.setItem("role", data.userType);
            if (data.profileImage) {
                getProfileImg(data.profileImage);
            }

        }
    }
    if (isLoaded === false) {
        getProfile();
        return (<div className='profile-info' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            
            <CircularProgress />
        </div>);
    }
    if (isLoaded === true) {
        return (
            <div className='profile-info'>


                <div className='property-tile'>
                    <div style={{ width: '120px' }}></div>
                    <img crossOrigin='anonymous' style={{ backgroundImage: `url(${image})` }} className='profile-pic'/>
                    <div style={{ width: '15px' }}></div>
                    <div className='username-number'>
                        <div style={{ height: '80px' }}></div>
                        <div className='username'>
                            <Person />
                            {userName}</div>
                        <div className='number'>
                            <Phone />
                            {phone}</div>
                        <div className='username'>
                            <LocationOn />
                            {location}
                        </div>
                    </div>
                    <div className='edit-section'>
                        <button className='edit-button-tile' onClick={() => setIsOPen(true)}>
                            <Edit />
                            Edit Profile</button>
                    </div>

                </div>
                    {/* <AgentProperty/> */}
              {
  localStorage.getItem('role') === "agency" ? (
    <>
      <div className='profilecard-row'>
        <ProfileCard Icon={HouseOutlined} title={"Properties"} value={'12'} />
        <ProfileCard Icon={AttachMoneyOutlined} title={"All-Time Earnings"} value={'25k'} />
        <ProfileCard Icon={Visibility} title={"Views"} value={viewsCount} />
      </div>
      <div className='profilecard-row'>
        <ProfileCard Icon={EditDocument} title={"Contracts"} value={"6"} />
        <ProfileCard Icon={TrendingUpOutlined} title={"Monthly Revenue"} value={'25k'} />
        <ProfileCard Icon={Favorite} title={"Votes"} value={votesCount} />
      </div>
    </>
  ) : (
    <div></div>
  )
    }



                <EditProfileDialog image={image} phone={phone} name={userName} open={isOpen} onClose={() => setIsOPen(false)} />
            </div>
        );
    }
}
export default ProfileInfoPage