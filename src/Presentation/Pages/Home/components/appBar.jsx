import { useState } from "react";
import "./appBar.css"
import AuthDialog from '../../../components/Dialogs/Auth_dialog';
import { useNavigate } from "react-router-dom";
import LoginDialog from "../../../components/Dialogs/login_dialog";
import EasyRent from "../../../components/Lottie/EasyRent";
import LocalButton from "../../../components/utils/local_button";
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from "../../../components/utils/theme_switcher";

function AppBar({ isHome }) {
    const {t}=useTranslation();
    let token = localStorage.getItem('token');
    let navigate=useNavigate();
      const[openDialog,setOpenDialog]=useState(false);
       return(
    <div className="appBar" style={{width:isHome?'80%':'100%', borderRadius:isHome?'20px':'0px',marginTop:isHome?'20px':'0px', animation:isHome?'appBar 0.5s ease-in':'appBarAlt 0.5s ease-in'}} >
         <EasyRent onClick={()=>{
            navigate('/',{replace:true})
         }}/>
        <div className="side-panel">
        <button className="appBar-button" onClick={()=>{
            navigate('/Properties',);
        }}>{t('listings')}</button>
            <button className="appBar-button" onClick={()=>{localStorage.removeItem('token');}}> Sell</button>
            {/* <button className="appBar-button" onClick={()=>{localStorage.removeItem('token');}}>Offer Property</button> */}

            <button className="appBar-button" onClick={()=>{navigate('/Complaints',{replace:true});}}> {t("complains")}</button>
            {/* <button className="appBar-button"> Rent</button>
            <button className="appBar-button">Buy Ability</button> */}
            <button className="appBar-button"  onClick={() => {
                    navigate('/Agents',{replace:true})
                }
                }>{t('findAgent')}</button>

                {!token ?
                    <button onClick={() => {
                        console.log(`Dialog ${openDialog}`);
                        setOpenDialog(!openDialog)
                    }} className="appBar-button"> {t("signIn")}</button> : <button onClick={() => {
                        navigate('/Profile')
                        setOpenDialog(!openDialog)
                    }} className="appBar-button" > Profile</button>
                }
                
                <LocalButton/>
                
                <ThemeSwitcher/>
               
            </div>


            <LoginDialog open={openDialog} onClose={() => setOpenDialog(false)} />


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