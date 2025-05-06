import {  useState } from "react";
import "./appBar.css"
import AuthDialog from '../../../components/Dialogs/Auth_dialog';


function AppBar(){
      const[openDialog,setOpenDialog]=useState(false);
    return(
    <div className="appBar">
         <img src="public/assets/images/logo.png" style={{width:'10vw' ,height:'10vh',boxShadow:'none'}}/>
        <div className="side-panel">
        <button className="appBar-button">Buy</button>
            <button className="appBar-button"> Sell</button>
            <button className="appBar-button"> Rent</button>
            <button className="appBar-button">Buy Ability</button>
            <button className="appBar-button">Find Agent</button>
            <button className="appBar-button"> About us</button>
            <button onClick={()=>{
                    console.log(`Dialog ${openDialog}`);
                    setOpenDialog(!openDialog)} } className="appBar-button"> Sign In</button>
                    </div>
       

        
        <AuthDialog open={openDialog} onClose={()=>setOpenDialog(false)}/>
            
        
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