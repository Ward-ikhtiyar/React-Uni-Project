import { HouseOutlined } from "@mui/icons-material";
import './profile_card.css'
function ProfileCard({title,Icon,value}){
return(
    <div className='profile-card'>
                    <div className='profile-card-title'>
                                {title}
                                </div> 
                            <div className='profile-card-body'>
                                <div style={{backgroundColor:'var(--app-blue-opaque)', width:'60px',height:'60px', justifyContent:'center',alignItems:'center',display:'flex',borderRadius:'50%'}} >
                                     <Icon style={{color:'var(--app-blue)',scale:'150%'}}/>
                                </div>
                                {value}
                             </div> 
                    </div>
);
}
export default ProfileCard