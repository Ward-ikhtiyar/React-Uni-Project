import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Edit } from "@mui/icons-material";
import EditDialog from "./edit_dialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TokenAxios from "../../../API/tokenAxios";
import EndPoints from "../../../API/endPoints";
import ErrorSnackbar from "../snackBar/erorr_snack";

function EditProfileDialog({ open, onClose, phone, name, image }) {
  const navigate = useNavigate();
  const formData = new FormData();

  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");
  const [snack, setSnack] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "backdropClick") onClose();
  };

  async function UploadImg(Img) {
    try {
      formData.append("user-image", Img);
      let response = await TokenAxios.post(
        EndPoints.User.UploadImg,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      if (response.status === 201) {
        navigate(0, { replace: true });
      }
    } catch (e) {
      if (e.response?.status === 413) {
        setSnack(true);
      }
    }
  }

  // bigger sizing
  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
    padding: "18px 0",
    fontSize: "22px",
    fontWeight: 600,
    color: "var(--app-font)"
  };

  const infoStyle = {
    fontWeight: 400,
    color: "grey",
    marginLeft: "14px",
    fontSize: "20px"
  };

  const editButtonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--app-blue)",
    border: "none",
    color: "white",
    borderRadius: "8px",
    padding: "10px",
    cursor: "pointer",
    boxShadow: "1px 1px 6px rgba(0,0,0,0.25)",
    minWidth: "45px",
    minHeight: "45px"
  };

  return (
    <>
      <Dialog
        PaperProps={{
          sx: {
            backgroundColor: "var(--app-background)",
            borderRadius: "16px",
            minWidth: "420px" // make the dialog itself wider
          }
        }}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          <div
            style={{
              fontFamily: "Lexend",
              fontSize: "26px",
              fontWeight: "700",
              color: "var(--app-font)"
            }}
          >
            My Profile
          </div>
        </DialogTitle>

        <DialogContent>
          {/* Profile picture */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "28px"
            }}
          >
            <div
              style={{
                width: "140px",
                height: "140px",
                border:'2px solid var(--app-blue)',
                borderRadius: "50%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(${image})`,
                position: "relative"
              }}
            >
              <input
                type="file"
                id="profilePic"
                style={{ display: "none" }}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    UploadImg(e.target.files[0]);
                  }
                }}
              />
              <label
                htmlFor="profilePic"
                style={{
                  position: "absolute",
                  bottom: "-12px",
                  right: "-12px",
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "var(--app-blue)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  boxShadow: "1px 1px 6px var(--app-shadow)"
                }}
              >
                <Edit sx={{ fontSize: 24 }} />
              </label>
            </div>
          </div>

          {/* Username row */}
          <div style={rowStyle}>
            <div>
              Username <span style={infoStyle}>{name}</span>
            </div>
            <button
              style={editButtonStyle}
              onClick={() => {
                onClose();
                setType("Username");
                setIsOpen(true);
              }}
            >
              <Edit sx={{ fontSize: 24 }} />
            </button>
          </div>

          {/* Phone row */}
          <div style={rowStyle}>
            <div>
              Number <span style={infoStyle}>{phone}</span>
            </div>
          </div>

          {/* Password row */}
          <div style={rowStyle}>
            <div>
              Password <span style={infoStyle}>******</span>
            </div>
            <button
              style={editButtonStyle}
              onClick={() => {
                onClose();
                setType("Password");
                setIsOpen(true);
              }}
            >
              <Edit sx={{ fontSize: 24 }} />
            </button>
          </div>

          {/* OK button */}
          <div style={{ marginTop: "32px" }}>
            <button
              style={{
                width: "100%",
                height: "55px",
                backgroundColor: "var(--app-blue)",
                border: "none",
                color: "white",
                fontSize: "20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontFamily: "Lexend"
              }}
              onClick={() => onClose()}
            >
              OK
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <EditDialog
        type={type}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
      <ErrorSnackbar
        open={snack}
        title={"Photo is too big in size"}
        handleClose={() => setSnack(false)}
      />
    </>
  );
}
export default EditProfileDialog;
