import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
// import { updateProperty, getDetails } from "../../../API/requests";
import '../../../index.css'
import { updateProperty,getDetails } from "../../../API/requests";
import ErrorSnackbar from "../snackBar/erorr_snack";
import MySnackbar from "../snackBar/success_snack";
const editableFields = [
  { label: "Title", key: "title", type: "text" },
  { label: "Description", key: "description", type: "text" },
  { label: "Type", key: "propertyType", type: "select", options: ["House", "Apartment", "Villa", "Land"] },
  { label: "Commerce", key: "isForRent", type: "select",options:["Sale","Rent"] },
  { label: "Price", key: "price", type: "number" },
  { label: "Location", key: "location", type: "text" },
  { label: "Bedrooms", key: "rooms", type: "number" },
  { label: "Bathrooms", key: "bathrooms", type: "number" },
  { label: "Area (sqm)", key: "area", type: "number" },
  { label: "Flooring", key: "flooringType", type: "select", options: ["Ceramic", "Wood", "Carpet", "Tile"] },
  { label: "Heating", key: "heatingType", type: "select", options: ["Central", "Gas", "Electric", "Solar"] },
  { label: "Floors", key: "floorNumber", type: "number" },
  { label: "Garage", key: "hasGarage", type: "select", options: ["Yes", "No"] },
  { label: "Garden", key: "hasGarden", type: "select", options: ["Yes", "No"] },
  
];

function EditPropertyDialog({ open, onClose, id }) {
  const [selectedField, setSelectedField] = useState("");
  const [fieldValue, setFieldValue] = useState("");
  const [originalProperty, setOriginalProperty] = useState({});
  const [snackBarStatus,setSnackBarStatus]=useState("");
  const [snackMsg,setSnackMsg]=useState("");
    const booleanFields = ["hasGarage", "hasGarden"];
  const numberFields = ["area", "rooms", "bathrooms", "floorNumber", "price"];
  useEffect(() => {
    if (open && id) {
      getDetails(id).then((data) => {
        setOriginalProperty(data);
      });
    }
  }, [open]);

  const handleFieldChange = (fieldKey) => {
    setSelectedField(fieldKey);
     if (booleanFields.includes(fieldKey)) {
    setFieldValue(originalProperty[fieldKey] ?"Yes":"No");
    
  }else if(fieldKey==="isForRent"){
    setFieldValue(originalProperty[fieldKey]?"Rent":"Sale" );
  }
    else {
    setFieldValue(originalProperty[fieldKey] ?? "");
  } 
    
  };

  const handleSave = async () => {
  if (!selectedField) return;

  let updated = {};


  if (booleanFields.includes(selectedField)) {
    updated[selectedField] = fieldValue === "Yes";
  } else if (numberFields.includes(selectedField)) {
    updated[selectedField] = Number(fieldValue);
  } else if(selectedField==="isForRent"){
    updated[selectedField] =fieldValue==="Rent"
  }
    else {
    updated[selectedField] = fieldValue;
  } 

  console.log("Parsed value:", updated[selectedField], "Type:", typeof updated[selectedField]);
  
  let response=await updateProperty(id, updated);
    if(response===200){
    setSnackMsg(`${selectedField} Updated!`);
    setSnackBarStatus("worked");
    console.log(`${selectedField} Updated!`);
    onClose();
  }
  else{
    console.log('catched an error')
  setSnackBarStatus("error");
    setSnackMsg(`Network issues or Wrong input`);}
  
};
  const selectedFieldMeta = editableFields.find(f => f.key === selectedField);

  return (
    <>
    <Dialog   open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle sx={{fontFamily:'Lexend'}} >Edit Property Attributes</DialogTitle>
      <DialogContent>
        <TextField
             sx={{
    fontFamily: "Lexend",
    "& .MuiInputBase-input": {
      fontFamily: "Lexend",
    },
    "& .MuiInputLabel-root": {
      fontFamily: "Lexend",
    },
  }}
          fullWidth
          select
          label="Select Field"
          value={selectedField}
          onChange={(e) => handleFieldChange(e.target.value)}
          margin="normal"
        >
          {editableFields.map((field) => (
            <MenuItem key={field.key} value={field.key}>
              {field.label}
            </MenuItem>
          ))}
        </TextField>

        {selectedFieldMeta && selectedFieldMeta.type === "select" ? (
          <TextField 
        sx={{
    fontFamily: "Lexend",
    "& .MuiInputBase-input": {
      fontFamily: "Lexend",
    },
    "& .MuiInputLabel-root": {
      fontFamily: "Lexend",
    },
  }}
            fullWidth
            select
            label={`New ${selectedFieldMeta.label}`}
            value={fieldValue}
            onChange={(e) => setFieldValue(e.target.value)}
            margin="normal"
          >
            {selectedFieldMeta.options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        ) : selectedField ? (
          <TextField     sx={{
    fontFamily: "Lexend",
    "& .MuiInputBase-input": {
      fontFamily: "Lexend",
    },
    "& .MuiInputLabel-root": {
      fontFamily: "Lexend",
    },
  }}
            fullWidth
            type={selectedFieldMeta?.type || "text"}
            label={`New ${selectedFieldMeta?.label}`}
            value={fieldValue}
            onChange={(e) => setFieldValue(e.target.value)}
            margin="normal"
          />
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button style={{border:'1px solid var(--app-blue)',fontFamily:'Lexend',color:'var(--app-blue)'}} onClick={onClose}>Cancel</Button>
        <Button style={{backgroundColor:'var(--app-blue)',fontFamily:'Lexend',color:'white'}} onClick={handleSave} className="colored-button" disabled={!selectedField}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
      <ErrorSnackbar open={snackBarStatus==="error"} handleClose={()=>setSnackBarStatus("closed")} title={snackMsg}/>
       <MySnackbar open={snackBarStatus==="worked"} handleClose={()=>setSnackBarStatus("closed")} title={snackMsg}/>

    
    </>
  );
}

export default EditPropertyDialog;
