import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, CircularProgress } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ErrorSnackbar from "../../snackBar/erorr_snack";
import { replace, useNavigate } from "react-router-dom";
import { resetPassword } from "../../../../API/requests";
// Import your reset password API function here
// import { resetPassword } from "../../../../API/requests";

function EnterNewPassword({open, onClose, Id}) {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [snackOpen, setSnackOpen] = useState(false);

    const handleSubmit = async () => {
        if(password.length < 6) {
            setError("Password must be at least 8 characters");
            setSnackOpen(true);
            return;
        }
        console.log('Id');
        console.log(Id);
        console.log('password');
        console.log(password);

        try {
            setLoading(true);
            let response=await resetPassword(Id,password);
            if(response.status===200|response.status===201){
                navigate(0,{replace:true});
            }
        } catch(e) {
            setError("An error occurred. Please try again.");
            setSnackOpen(true);
        } finally {
            setLoading(false);
        }
    };

    const handleClose = (event, reason) => {
        if(reason === 'backdropClick') return;
        onClose();
    };

    return (
        <>
            <Dialog   PaperProps={{
    sx: { backgroundColor: 'var(--app-background)' },
  }} open={open} onClose={handleClose}>
                <DialogTitle>
                    <div className="Main-title">Enter New Password</div>
                </DialogTitle>
                <DialogContent>
                    <div className="dialog-body" style={{width: '36vw'}}>
                        <p>New Password</p>
                        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                            <input
                                className="inputBox"
                                type={showPassword ? "text" : "password"}
                                placeholder=""
                                value={password}
                                onChange={(e) => {setPassword(e.target.value); console.log(password)}}
                                style={{ paddingRight: "40px" }}
                                disabled={loading}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(prev => !prev)}
                                style={{
                                    position: "absolute",
                                    right: "8px",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "16px"
                                }}
                                tabIndex={-1}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? 
                                    <VisibilityOff sx={{color:'var(--app-blue)',scale:'100%'}} /> : 
                                    <Visibility sx={{color:'var(--app-blue)',scale:'100%'}} />
                                }
                            </button>
                        </div>
                        <button
                            className="login-button"
                            onClick={handleSubmit}
                            style={{ marginTop: "3vh", marginBottom: "3vh" }}
                            disabled={loading}
                        >
                            {loading ? 
                                <CircularProgress size={20} sx={{color:'white'}} /> : 
                                "Reset Password"
                            }
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
            <ErrorSnackbar
                open={snackOpen}
                title={error}
                handleClose={() => setSnackOpen(false)}
            />
        </>
    );
}

export default EnterNewPassword;