import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import { SnackbarContent } from "@mui/material";
import { LocationCity, LocationOnOutlined } from "@mui/icons-material";
import { div } from "framer-motion/client";

const MySnackbar = ({open,handleClose,title}) => {
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
         style={{display:'flex',flexDirection:'row'}}></div> }/>
      </Snackbar>
    
  );
};

export default MySnackbar;
