import { createContext, useState } from "react";
import "./appBar.css"
import AuthDialog from '../../../components/Dialogs/Auth_dialog';

export const openDialogcontext=createContext(); 
function AppBar(){
      const[openDialog,setOpenDialog]=useState(false);
    return(
    <div className="appBar">
        <div className="side-panel">
        <button className="appBar-button">Buy</button>
            <button className="appBar-button"> Sell</button>
            <button className="appBar-button"> Rent</button>
            <button className="appBar-button">Home Loans</button>
            <button className="appBar-button">Find Agent</button>
        </div>
        <p className="logo-side">Speed Order</p>

        <div className="side-panel">
            <button className="appBar-button">Manage Rentals</button>
            <button className="appBar-button"> Advertise</button>
            <button className="appBar-button"> Help</button>
            <openDialogcontext.Provider value={openDialog}>
                <button onClick={()=>{
                    console.log(openDialog);
                    setOpenDialog(!openDialog)} } className="appBar-button"> Sign In</button>
                </openDialogcontext.Provider>
            
        </div>
        <AuthDialog open={openDialog} onClose={()=>setOpenDialog(false)}/>
            
        
    </div>);
    
}
export default AppBar
