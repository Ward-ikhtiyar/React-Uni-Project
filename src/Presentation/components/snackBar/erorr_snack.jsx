import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import { SnackbarContent } from "@mui/material";

const ErrorSnackbar = ({open,handleClose,title}) => {
  return (  
      <Snackbar sx={{backgroundColor:'transparent'}}
      anchorOrigin={{vertical:'top', horizontal:'center'}}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        
      >
        <SnackbarContent style={{backgroundColor:'red', width:'30vw', borderRadius:'10px'}} message={title}/>
      </Snackbar>
    
  );
};

export default ErrorSnackbar;
