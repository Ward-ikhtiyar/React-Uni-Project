import { Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useState } from "react";
import TokenAxios from "../../../API/tokenAxios";
import EndPoints from "../../../API/endPoints";
import { replace, useNavigate } from "react-router-dom";
import {CircularProgress} from "@mui/material";
import ErrorSnackbar from '../../components/snackBar/erorr_snack';

function EditDialog({type,open,onClose}){
    const[snack,setSnack]=useState(false);
    const[snackTitle,setSnackTitle]=useState("");
    const navigate=useNavigate();
    const[loading,setLoading]=useState(false);
    const[name,setName]=useState('');
    const[pass,setPass]=useState('');
    const handleClose=(event,reason)=>{
        if(reason==='backdropClick'){
            setName("");
            setPass("");
            onClose();
        }
    }
    async function changeinfo(pass,newData) {
        setLoading(true);
        try{
                    let response= await TokenAxios.patch(EndPoints.User.ChangeInfo,{
            myPassword:pass,
            username:newData
        })
            if(response.status===200){
             setSnack(true);
                setSnackTitle("Incorrect Input");   
                navigate(0,{
                    replace:true,
                });
                
            }
        }
        catch(e){
            if(e.response.status===400){
              setSnack(true);
                setSnackTitle("Incorrect Input");

            }
            if(e.response.status===401){
               setSnack(true);
                setSnackTitle("Incorrect Password");
                
            }
            setLoading(false);
            console.log(e);
        }

    }
     async function changePass(pass,newData) {
        console.log("changing info like crazzyy");

        setLoading(true);
        try{
                    let response= await TokenAxios.patch(EndPoints.User.ChangeInfo,{
            myPassword:pass,
            password:newData
        })
            if(response.status===200){
             setSnack(true);
                setSnackTitle("Incorrect Input");   
                navigate(0,{
                    replace:true,
                });
                
            }
        }
        catch(e){
            if(e.response.status===400){
              setSnack(true);
                setSnackTitle("Incorrect Input");

            }
            if(e.response.status===401){
               setSnack(true);
                setSnackTitle("Incorrect Password");
                
            }
            setLoading(false);
            console.log(e);
        }

    }
    return(
        <>
        <Dialog   PaperProps={{
    sx: { backgroundColor: 'var(--app-background)' },
  }} open={open}onClose={handleClose}>
            <DialogTitle><div  className="Main-title">Edit {type} </div></DialogTitle>
            <DialogActions>
                <div style={{alignItems:'center',justifyContent:'start',animation:'moveUp 0.5s', overflowY:'hidden', height:'40vh'}} className="dialog-body">
                    <div style={{height:'4vh'}}></div>
                    <input style={{height:'7vh',fontSize:'25px'}} placeholder={`New ${type}`}  className="inputBox" type="text" value={name} onInput={(e)=>setName(e.target.value)} />
                    <div style={{height:'5vh'}}></div>
                    <input style={{height:'7vh',fontSize:'25px'}} placeholder={type=="Password"?"Old Password":"Password" } className="inputBox" type="text" value={pass} onInput={(e)=>setPass(e.target.value)} />
<div style={{height:'6vh'}}></div>
                    <button style={{width:'12vw'}} className="login-button" onClick={()=>{
                        console.log()
                        if(type=="Password"){
                        changePass(pass,name);}
                        if(type!=="Password"){
                            changeinfo(pass,name);
                        }
                        
                        }}>{loading? <CircularProgress sx={{color:'white',scale:'50%'}}/>:"Confirm"} </button>
                </div>
            </DialogActions>
        </Dialog>
                           <ErrorSnackbar title={snackTitle}  open={snack} handleClose={()=>setSnack(false)}/>

        </>
        
    );
}
export default EditDialog