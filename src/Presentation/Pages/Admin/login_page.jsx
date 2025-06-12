import { AdminPanelSettings } from '@mui/icons-material';
import EasyRent from '../../components/Lottie/EasyRent';
import './login_page.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AdminLogin(){
    const navigate=useNavigate();
    const [number,setNumber]=useState('');
    const [Password,setPassword]=useState('');
    return(
        <div  className="admin-page" >
            <div style={{display:'flex'}}>
            <EasyRent/>
            <div style={{fontSize:'40px',color:'var(--app-blue)'}}><AdminPanelSettings sx={{scale:'190%'}}/></div></div>
            <div style={{height:'20px'}}></div>
            <div style={{backgroundColor:'var(--app-blue-opaque)', display:'flex' ,flexDirection:'column',justifyContent:'center',alignItems:'center', height:"50vh",width:'30vw',border:'2px solid var(--app-blue)', borderRadius:'14px'}}>
            <input onChange={(e)=>{
                        setNumber(e.target.value)
                    }} className="admin-inputBox" placeholder='Number'/>
            <div style={{height:'40px'}}></div>
                    <input onChange={(e)=>{
                        setPassword(e.target.value)
                    }} className="admin-inputBox" placeholder='Password'/>
<div style={{height:'40px'}}></div>
            <button onClick={()=>navigate('/Dashboard')} className='colored-button' style={{width:'10vw', height:'6vh',boxShadow:'none'}}> Login</button>        
            </div> 
        </div>
    );
}
export default AdminLogin;