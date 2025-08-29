import { Close } from "@mui/icons-material";
import { Dialog, DialogContent, DialogTitle, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { adminUpdatePlan } from "../../../../API/admin_requests";
import MySnackbar from "../../snackBar/success_snack";

function EditPlanDialog({ open, onClose, planId }) {
  const [field, setField] = useState("planType"); 
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [Type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [limit, setLimit] = useState("");
  const [Description, setDescription] = useState("");
  const [Duration, setDuration] = useState("");
  const [DurationUnit, setDurationUnit] = useState("days");

function getSelectedFieldValue(field) {
  switch (field) {
    case "planType":
      return { planType: Type };
    case "planDuration":
      return { planDuration:`${Duration}_${DurationUnit}` };
    case "planPrice":
      return { planPrice: price };
    case "limit":
      return { limit: limit };
    case "description":
      return { description: Description };
    default:
      return {};
  }
}

async function updatePlan(){
let patchData=getSelectedFieldValue(field);
try{
  setLoading(true)
  let response=await adminUpdatePlan(patchData,planId);
  setLoading(false)  
  setSuccess(true)
}
catch(e){
  setLoading(false)  
}
}


  return (
    <Dialog
      PaperProps={{
        sx: { backgroundColor: "var(--app-background)" },
      }}
      open={open}
    >
      <DialogTitle>
        <div className="Main-title">
          Edit Plan #{planId}
          <div className="close-icon" onClick={() => onClose()}>
            <Close />
          </div>
        </div>
      </DialogTitle>

      <DialogContent>
        <div style={{ flexDirection: "column", }} className="dialog-body">
          <p>Field</p>

          <TextField
            value={field}
            onChange={(e) => setField(e.target.value)}
            InputProps={{
              sx: { color: "var(--app-font)", fontFamily: "Tajawal" },
            }}
            sx={{
              border: "1px solid var(--app-blue)",
              borderRadius: "6px",
              color: "var(--app-font)",
            }}
            SelectProps={{
              MenuProps: {
                PaperProps: {
                  sx: {
                    fontFamily: "Tajawal",
                    backgroundColor: "var(--app-background)",
                    "& .MuiMenuItem-root": {
                      color: "var(--app-font)",
                    },
                  },
                },
              },
            }}
            fullWidth
            select
          >
            <MenuItem value="planType">Type</MenuItem>
            <MenuItem value="planDuration">Duration</MenuItem>
            <MenuItem value="planPrice">Price</MenuItem>
            <MenuItem value="limit">Limit</MenuItem>
            <MenuItem value="description">Description</MenuItem>
          </TextField>

          <div style={{ height: "30px" }} />

          {/* CONDITIONAL RENDERING */}
          {field === "planType" && (
            <select
              className="dropdown-signup"
              style={{
                width: "100%",
                height: "40px",
                border: "2px solid var(--app-blue)",
              }}
              value={Type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Trial">Trial</option>
              <option value="Basic">Basic</option>
              <option value="Platinum">Platinum</option>
              <option value="Vip">Vip</option>
            </select>
          )}

          {field === "planDuration" && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <input
                style={{ width: "100px" }}
                className="inputBox"
                type="number"
                placeholder="Duration"
                value={Duration}
                onInput={(e) => setDuration(e.target.value)}
              />
              <select
                className="dropdown-signup"
                style={{
                  height: "40px",
                  marginTop: "20px",
                  marginLeft: "20px",
                  border: "2px solid var(--app-blue)",
                }}
                value={DurationUnit}
                onChange={(e) => setDurationUnit(e.target.value)}
              >
                <option value="day">Days</option>
                <option value="week">Weeks</option>
                <option value="month">Months</option>
                <option value="year">Years</option>
              </select>
            </div>
          )}

          {field === "planPrice" && (
            <input
              min="0"
              step="5"
              className="inputBox"
              type="number"
              placeholder="Enter plan price"
              value={price}
              onInput={(e) => setPrice(e.target.value)}
            />
          )}

          {field === "limit" && (
            <input
              min="0"
              step="1"
              className="inputBox"
              type="number"
              placeholder="Enter user limit"
              value={limit}
              onInput={(e) => setLimit(e.target.value)}
            />
          )}

          {field === "description" && (
            <textarea
              style={{ height: "15vh", maxWidth: "100%" }}
              className="inputBox"
              placeholder="Write a description..."
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
            />
          )}
          <button onClick={()=>updatePlan()} style={{marginTop:'50px',width:'100%',height:'50px'}} className="colored-button">Apply Changes</button>
        </div>
      </DialogContent>
      <MySnackbar title={"Plan updated Successfully"} open={isSuccess} handleClose={()=>setSuccess(false)}/>
    </Dialog>
  );
}

export default EditPlanDialog;
