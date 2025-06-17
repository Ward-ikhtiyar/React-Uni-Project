import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import { SnackbarContent } from "@mui/material";
import { LocationCity, LocationOnOutlined } from "@mui/icons-material";
import { div } from "framer-motion/client";

const LocationSnackBar = ({open,handleClose,title,location}) => {
  return (  
      <Snackbar sx={{backgroundColor:'transparent'}}
      anchorOrigin={{vertical:'top', horizontal:'left'}}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        
      >
        <SnackbarContent 
        style={{backgroundColor:'var(--app-blue)', width:'30vw', borderRadius:'10px'}} 
        message={<div
         style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'10px',fontFamily:'Tajawal',fontSize:'20px'}}><LocationOnOutlined/>{title}</div> }/>
      </Snackbar>
    
  );
};

export default LocationSnackBar;
