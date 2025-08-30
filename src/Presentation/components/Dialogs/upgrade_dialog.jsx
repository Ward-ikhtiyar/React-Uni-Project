import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { upgardeToAgency } from "../../../API/requests";

function UpgradeDialog({ open, onClose }) {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange1 = (e) => setFile1(e.target.files[0]);
  const handleFileChange2 = (e) => setFile2(e.target.files[0]);

  const handleRemoveFile1 = () => setFile1(null);
  const handleRemoveFile2 = () => setFile2(null);

  const handleSubmit = async () => {
    if (!file1 || !file2) {
      alert("Please select both photos");
      return;
    }

    setLoading(true);
    try {

      const formData = new FormData();
      formData.append("user-images",file1);
      for (let pair of formData.entries()) {
  console.log(pair[0], pair[1]);
}
      let response=await upgardeToAgency(formData);
      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog PaperProps={{
          sx: {
            backgroundColor: "var(--app-background)",
            borderRadius: "16px",
            fontFamily:'Tajawal',
            color:'var(--app-font)'
          }
        }} open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{color:'var(--app-blue)',fontFamily:'Tajawal',textAlign:'center',fontSize:'30px'}}>Verify Your Account</DialogTitle>
      <DialogContent style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        
        {/* Photo 1 */}
        <div style={{ position: "relative" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>Upload Photo 1</label>
          <label
            htmlFor="file1"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "var(--app-blue)",
              color: "white",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Choose Photo
          </label>
          <input
            id="file1"
            type="file"
            accept="image/*"
            onChange={handleFileChange1}
            style={{ display: "none" }}
          />
          {file1 && (
            <div style={{ position: "relative", marginTop: "10px" }}>
              <img
                src={URL.createObjectURL(file1)}
                alt="Preview 1"
                style={{ width: "100%", maxHeight: "200px", objectFit: "cover", borderRadius: "8px" }}
              />
              <IconButton
                onClick={handleRemoveFile1}
                size="small"
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  backgroundColor: "var(--app-blue)",
                  color: "white",
                  zIndex: 1,
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>
          )}
        </div>

        {/* Photo 2 */}
        <div style={{ position: "relative" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>Upload Photo 2</label>
          <label
            htmlFor="file2"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "var(--app-blue)",
              color: "white",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Choose Photo
          </label>
          <input
            id="file2"
            type="file"
            accept="image/*"
            onChange={handleFileChange2}
            style={{ display: "none" }}
          />
          {file2 && (
            <div style={{ position: "relative", marginTop: "10px" }}>
              <img
                src={URL.createObjectURL(file2)}
                alt="Preview 2"
                style={{ width: "100%", maxHeight: "200px", objectFit: "cover", borderRadius: "8px" }}
              />
              <IconButton
                onClick={handleRemoveFile2}
                size="small"
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  backgroundColor: "var(--app-blue)",
                  color: "white",
                  zIndex: 1,
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>
          )}
        </div>
      </DialogContent>

      <DialogActions>
        <Button style={{background:'white',color:'var(--app-blue)',fontFamily:'thicc',}} onClick={onClose} disabled={loading}>Cancel</Button>
        <Button 
          variant="contained"
          sx={{ backgroundColor: "var(--app-blue)",fontFamily:'Lexend' }}
          onClick={handleSubmit}
          disabled={loading || !file1 || !file2}
        >
          {loading ? "Uploading..." : "Submit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UpgradeDialog;
