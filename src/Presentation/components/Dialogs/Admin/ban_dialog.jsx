import { Dialog, DialogContent, DialogTitle, DialogActions, Button, Typography } from "@mui/material";
import { adminUnBlockUser } from "../../../../API/admin_requests";

function BanDetailsDialog({ open, onClose, ban, onUnban }) {
   async function onUnban(id){
    try{
     let response=await adminUnBlockUser(id);   
    }catch(e){

    }
   }

  if (!ban) return null;

  const { user_id, reason, banExpiresAt, createdAt } = ban;

  const formatDate = (dateStr) => new Date(dateStr).toLocaleString();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { backgroundColor: "var(--app-background)", borderRadius: "12px" },
      }}
    >
      <DialogTitle>
        <div className="Main-title">Ban Details</div>
      </DialogTitle>

      <DialogContent>
        <div className="dialog-body" style={{ minWidth: "300px" }}>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            <strong>User ID:</strong> {user_id}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            <strong>Reason:</strong> {reason}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "6px" }}>
            <strong>Banned At:</strong> {formatDate(createdAt)}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "6px" }}>
            <strong>Expires At:</strong> {formatDate(banExpiresAt)}
          </Typography>
        </div>
      </DialogContent>

      <DialogActions>
        <Button style={{background:'white',color:'var(--app-blue)'}} onClick={onClose} color="secondary">
          Close
        </Button>
        <Button
          onClick={() => {
            onUnban(ban.user_id);
            onClose();
          }}
          style={{color:'white',background:'var(--app-blue)'}}

        >
          Unban User
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default BanDetailsDialog;
