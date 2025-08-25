import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { getAdminLogs } from "../../../../API/admin_requests";
import AdminsLogs from "../../../Pages/Admin/super_admin/Admins/admins_logs";

function AdminLogs({ id, name, open, onClose }) {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    async function fetchLogs() {
      try {
        const fetchedLogs = await getAdminLogs(id);
        if (Array.isArray(fetchedLogs)) {
          setLogs(fetchedLogs);
        } else {
          setLogs([]);
        }
      } catch (err) {
        console.error("Error fetching logs:", err);
        setLogs([]);
      }
    }

    if (id) {
      fetchLogs();
    }
  }, [id]); 

  return (
    <Dialog   PaperProps={{
    sx: { backgroundColor: 'var(--app-background)' },
  }} open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        <div className="Main-title">{`${name}'s Activity Log`}</div>
      </DialogTitle>
      <DialogContent>
        <div className="dialog-body">
          {logs.length > 0 ? (
            logs.map((log, index) => <AdminsLogs key={index} log={log} />)
          ) : (
            <div>No logs available</div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AdminLogs;
