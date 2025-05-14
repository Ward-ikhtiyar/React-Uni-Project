import {  useState } from "react";
import "./appBar.css"
import AuthDialog from '../../../components/Dialogs/Auth_dialog';
import {  useNavigate } from "react-router-dom";
import LoginDialog from "../../../components/Dialogs/login_dialog";

function AppBar(){
    let token=localStorage.getItem('token');
    console.log(token);
    let navigate=useNavigate();
      const[openDialog,setOpenDialog]=useState(false);
    return(
    <div className="appBar">
         <img src="public/assets/images/logo.png" style={{width:'10vw' ,height:'10vh',boxShadow:'none'}}/>
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