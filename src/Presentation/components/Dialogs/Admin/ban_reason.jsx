import { useState } from "react";
import { CircularProgress, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { adminBlockUser } from "../../../../API/admin_requests";
import MySnackbar from "../../snackBar/success_snack";
function BlockUserDialog({ userId, open, handleClose }) {
  const [reason, setReason] = useState("");
  const [durationValue, setDurationValue] = useState("");
  const [durationUnit, setDurationUnit] = useState("day");
  const[loading,setLoading]=useState(false);
  const[openSnackBar,setOpenSnack]=useState(true);
  const handleBan =async () => {
    let banReas={
      reason:reason,
      duration:`${durationValue}_${durationUnit}`,
    };
      
    setLoading(true);
        try{

          let response=  await adminBlockUser(userId,banReas)
            setOpenSnack(true)
          console.log(response);
        }catch(e){
            console.log(e);
            setLoading(false)
        }
    handleClose();

  };

  return (
    <Dialog
      PaperProps={{
        sx: { backgroundColor: "var(--app-background)" },
      }}
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        <div className="Main-title">Ban a User</div>
      </DialogTitle>
      <DialogContent>
        <div className="dialog-body">
          {/* Reason input */}
          <input
            className="inputBox"
            type="text"
            placeholder="State your reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />

          <div style={{ height: "20px" }}></div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <input
              className="inputBox"
              type="number"
              placeholder="Duration"
              value={durationValue}
              onChange={(e) => setDurationValue(e.target.value)}
              style={{ width: "80px" }}
            />

            <select
              className="inputBox"
              value={durationUnit}
              onChange={(e) => setDurationUnit(e.target.value)}
              style={{ width: "120px" }}
            >
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>
          </div>

          <div style={{ height: "20px" }}></div>

          <div style={{height:'40px'}} className="colored-button" onClick={handleBan}>
            {loading?<CircularProgress/>:`Ban User`}
          </div>
        </div>
      </DialogContent>
      <MySnackbar open={openSnackBar} handleClose={()=>setOpenSnack(false)} title={"User Have been banned"}/>
    </Dialog>
  );
}

export default BlockUserDialog;
