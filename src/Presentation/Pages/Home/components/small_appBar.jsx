import {  useState } from "react";
import "./small_appBar.css"
import AuthDialog from '../../../components/Dialogs/Auth_dialog';
import {  useNavigate } from "react-router-dom";
import LoginDialog from "../../../components/Dialogs/login_dialog";
import EasyRent from "../../../components/Lottie/EasyRent";

function AppBar({isHome}){
    let token=localStorage.getItem('token');
    console.log(token);
    let navigate=useNavigate();
      const[openDialog,setOpenDialog]=useState(false);
       return(
    <div className="appBar" style={{width:isHome?'80%':'100%', borderRadius:isHome?'20px':'0px',marginTop:isHome?'20px':'0px', animation:isHome?'appBar 0.5s ease-in':'appBarAlt 0.5s ease-in'}} >
         {/* <img src="public/assets/images/logo.png" style={{width:'10vw' ,height:'20vh',boxShadow:'none', paddingTop:'5px'}}/> */}
         <EasyRent/>
        <div className="side-panel">
        <button className="appBar-button" onClick={()=>{
            navigate('/Properties',);
        }}>Buy</button>
            <button className="appBar-button" onClick={()=>{localStorage.removeItem('token');}}> Sell</button>
            <button className="appBar-button"> Rent</button>
            <button className="appBar-button">Buy Ability</button>
            <button className="appBar-button">Find Agent</button>

              {!token?
                <button onClick={()=>{
                    console.log(`Dialog ${openDialog}`);
                    setOpenDialog(!openDialog)} } className="appBar-button"> Sign In</button>:<button onClick={()=>{
                    navigate('/Profile')
                    setOpenDialog(!openDialog)} } className="appBar-button" > Profile</button>
              }  
       </div>

        
        <LoginDialog open={openDialog} onClose={()=>setOpenDialog(false)}/>
            
        
    </div>);
    
    
    
}
export default AppBar







{/* <div className="side-panel">
            <button className="appBar-button">Manage Rentals</button>
            <button className="appBar-button"> Advertise</button>
            <button className="appBar-button"> Help</button>
            
                <button onClick={()=>{
                    console.log(openDialog);
                    setOpenDialog(!openDialog)} } className="appBar-button"> Sign In</button>
                
            
        </div> */}