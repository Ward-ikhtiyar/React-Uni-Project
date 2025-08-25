import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";
import { useState } from "react";

function ConfirmDialog({ setPassword,setOpen,open, onConfirm, title = "Are you sure?", content = "This action cannot be undone." }) {
    return (
    <Dialog   PaperProps={{
    sx: { backgroundColor: 'var(--app-background)' },
  }} open={open}  maxWidth="xs" fullWidth>
      <DialogTitle sx={{fontFamily:'Lexend',color:'var(--app-blue)'}}>{title}</DialogTitle>
      <DialogContent >
        <Typography sx={{fontFamily:'Lexend'}}>{content}</Typography>
        <div style={{height:'10px'}}></div>
        <input type="text"  className="inputBox" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} />
      </DialogContent>
      <DialogActions>
        <Button style={{fontFamily:'Lexend'}} onClick={()=>setOpen(false)} variant="outlined" color="primary">
          Cancel
        </Button>
        <Button style={{fontFamily:'Lexend',backgroundColor:'#FF0000'}} onClick={onConfirm} variant="contained" color="error">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
