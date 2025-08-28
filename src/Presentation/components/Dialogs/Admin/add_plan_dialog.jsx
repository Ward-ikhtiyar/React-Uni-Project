import { CircularProgress, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import ErrorSnackbar from "../../snackBar/erorr_snack";
import MySnackbar from "../../snackBar/success_snack";
import { Close, Add } from "@mui/icons-material";
import '../Auth_dialog.css';
import { adminAddPlan } from "../../../../API/admin_requests";
function AddPlanDialog({ open, onClose }) {
    const [Type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [limit, setLimit] = useState("");
    const [Description, setDescription] = useState("");
    const [Duration, setDuration] = useState("");
    const [DurationUnit, setDurationUnit] = useState("days"); 
    const [loading, setLoading] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarTitle, setSnackbarTitle] = useState("");
    const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
    const [photo, setPhoto] = useState('');
    const [addedPhoto, setAddedPhoto] = useState(false);

    async function addPlan() {
        setLoading(true);
        let duration=`${Duration}_${DurationUnit}`;
        console.log(duration)
        let response=await adminAddPlan(Type,duration,price,Description,limit);
        if(response===200){
            setOpenSnackbar(true);
            
        }else{
                setOpenErrorSnackbar(true);
            if(response===500){
                setSnackbarTitle("Server issue,Please try again later");
            }else{
                setSnackbarTitle("input Error,Please check all the fields ");
            }
        }
        setLoading(false);
    }

    const onCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const onCloseErrorSnackbar = () => {
        setOpenErrorSnackbar(false);
    };

    return (
        <Dialog   PaperProps={{
    sx: { backgroundColor: 'var(--app-background)' },
  }} open={open} onClose={onClose}>
            <DialogTitle>
                <div className="Main-title">
                    {'Add Plan'}
                    <div
                        className="back-button"
                        style={{
                            scale: "1.3",
                            cursor: "pointer",
                            marginTop: "2px",
                            marginRight: "10px",
                            backgroundColor: 'transparent'
                        }}
                        onClick={() => { onClose(); removePhoto(); }}
                    >
                        <Close className="back-button" />
                    </div>
                </div>
            </DialogTitle>

            <DialogContent className="dialog-body">

                <p>Type</p>
                <select
                        className="dropdown-signup"
                        style={{ width:'100%',height: "40px",border:'2px solid var(--app-blue)' }}
                        value={Type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="Trial">Trial</option>
                        <option value="Basic">Basic</option>
                        <option value="Platinum">Platinum</option>
                        <option value="Vip">Vip</option>
                    </select>


                <p>Duration</p>
                <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                    <input
                        style={{ width: "100px" }}
                        className="inputBox"
                        type="number"
                        placeholder=" "
                        value={`${Duration}`}
                        onInput={(e) => {
                            setDuration(e.target.value);
                            console.log(Duration);
                        }}
                    />
                    <select
                        className="dropdown-signup"
                        style={{ height: "40px",marginTop:'20px',marginLeft:'20px',border:'2px solid var(--app-blue)' }}
                        value={DurationUnit}
                        onChange={(e) => setDurationUnit(e.target.value)}
                    >
                        <option value="day">Days</option>
                        <option value="week">Weeks</option>
                        <option value="month">Months</option>
                        <option value="year">Years</option>
                    </select>
                </div>

                <p>Plan Price</p>
                <input
                    min="0"
                    step="5"
                    className="inputBox"
                    type="number"
                    placeholder=" "
                    value={`${limit}`}
                    onInput={(e) => {
                        setLimit(e.target.value);
                        console.log(Type);
                    }}
                />

                <p>Properties Limit </p>
                <input
                    min="0"
                    step="5"
                    className="inputBox"
                    type="number"
                    placeholder=" "
                    value={`${price}`}
                    onInput={(e) => {
                        setPrice(e.target.value);
                        console.log(Type);
                    }}
                />

                <p>Description</p>
                <textarea
                    style={{ height: '15vh', maxWidth: '100%' }}
                    className="inputBox"
                    placeholder="Write a description..."
                    value={Description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                        console.log(e.target.value);
                    }}
                />

                <div style={{ display: "flex", flexDirection: "row", gap: "10px", marginTop: "10px", alignItems: "center" }}></div>

                <div style={{ height: "40px" }}></div>

                <button
                    style={{ width: '100%' }}
                    disabled={loading}
                    className="login-button"
                    onClick={() => {addPlan()}}
                >
                    {loading ? <CircularProgress size={24} style={{ color: 'white' }} /> : "Add Plan"}
                </button>
            </DialogContent>

            <MySnackbar open={openSnackbar} handleClose={onCloseSnackbar} title="Plan added successfully" />
            <ErrorSnackbar open={openErrorSnackbar} handleClose={onCloseErrorSnackbar} title={snackbarTitle} />
        </Dialog>
    );
}

export default AddPlanDialog;
