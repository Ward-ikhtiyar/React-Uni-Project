import { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import ErrorSnackbar from "../../snackBar/erorr_snack";
import { reset } from "../../../../API/requests";
import VerifyDialog from "../verify_dialog";
import { CircularProgress } from "@mui/material";

function EnterPhoneDialog({ open, onClose, onSuccess }) {
    const[openVerify,setOpenVerify]=useState(false);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const[id,setId]=useState(null);
  const[snackOpen,setSnackOpen]=useState(false);

  const handleSend = async () => {
    if(phone.length!==10){
        setError("Invalid phone number");
        setSnackOpen(true);
        return;
    }

    
      setLoading(true);
      const response=await reset(phone);
      if(response.status===201){
        setId(response.data.userId);
        onClose();
        setLoading(false);
        setOpenVerify(true);
        return;
      }
      if(response.status===400){
        setError("Failed to send OTP. Please try again.");
        setSnackOpen(true);
        setLoading(false);
        return;
      }
      if(response.status===404){
        setError("Phone number not found. Please try again.");
        setSnackOpen(true);
        setLoading(false);
        return;
      }
      if(response.status===401){
        setError(`${response.data.message}`);
        setSnackOpen(true);
        setLoading(false);
        return;
      }
      
    
  };

  const handleClose = (event, reason) => {
    if (reason === "backdropClick")
    onClose();
  };

  return (
    <>
      <Dialog id="dialog" open={open} onClose={handleClose}>
        <DialogTitle>
          <div className="Main-title">Reset Password</div>
        </DialogTitle>
        <DialogContent>
          <div className="dialog-body" style={{ width: "36vw" }}>
            <p>Phone Number</p>
            <input
              className="inputBox"
              type="text"
              placeholder=" "
              value={phone}
              onInput={(e) => setPhone(e.target.value)}
              disabled={loading}
            />
            <button
              className="login-button"
              onClick={handleSend}
              style={{ marginTop: "3vh", marginBottom: "3vh" }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={20} sx={{color:'white'}} /> : "Send Code"}
            </button>
          </div>
        </DialogContent>
      </Dialog>
      <ErrorSnackbar
        open={snackOpen}
        title={error}
        handleClose={() => setSnackOpen(false)}
      />
      <VerifyDialog open={openVerify} onClose={()=>setOpenVerify(false)} Id={id} reset={true}/>
    </>
  );
}

export default EnterPhoneDialog;
