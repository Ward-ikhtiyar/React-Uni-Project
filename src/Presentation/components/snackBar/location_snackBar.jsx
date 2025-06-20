import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import { CircularProgress, SnackbarContent } from "@mui/material";
import { Check, ErrorOutline, LocationCity, LocationOnOutlined } from "@mui/icons-material";
import { div } from "framer-motion/client";
import { useProperty } from "../../../consts/context";
import './snackbars.css'
const LocationSnackBar = ({open,handleClose,title,isLoading}) => {
  const [stringLocation,setStringLocation]=useState("");
  const {isError,setIsError,msg,isSuccess}=useProperty();
  
  return (  
      <Snackbar sx={{backgroundColor:'transparent',animation:!isError?"":'ErrorAnimAtions 0.1s ease-in'}}
      anchorOrigin={{vertical:'top', horizontal:'left'}}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        
      >
        <SnackbarContent 
        style={{backgroundColor:isError?'red':isSuccess?'#24A56C':'var(--app-blue)', width:'30vw', borderRadius:'10px'}} 
        message={<div
         style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'10px',fontFamily:'Tajawal',fontSize:'20px'}}>{isLoading?<CircularProgress sx={{color:'white',scale:'60%'}}/>:isError?<ErrorOutline/>:isSuccess?<Check/>:<LocationOnOutlined/>}{isLoading?"Loading...":isError?msg:isSuccess?msg:title}</div> }/>
      </Snackbar>
    
  );
};

export default LocationSnackBar;
