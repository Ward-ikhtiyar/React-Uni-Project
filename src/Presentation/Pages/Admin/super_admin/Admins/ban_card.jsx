import { Card, CardContent, Typography } from "@mui/material";

function BanInfoCard({ ban }) {
  if (!ban) return null;

  const { user_id, reason, banExpiresAt, createdAt } = ban;

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleString(); // local date/time format
  };

  return (
    <Card
      sx={{
        backgroundColor: "var(--app-background)",
        borderRadius: "12px",
        color:'var(--app-font)',
        boxShadow: "0 2px 8px var(--app-shadow)",
        margin: "10px 0",
        height:'200px',
        display:'flex'
        ,flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          User #{user_id} is Banned
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "8px" }}>
          <strong>Reason:</strong> {reason}
        </Typography>
        <Typography variant="body2" color="var(--app-font)">
          <strong>Banned At:</strong> {formatDate(createdAt)}
        </Typography>
        <Typography variant="body2" color="var(--app-font)">
          <strong>Expires At:</strong> {formatDate(banExpiresAt)}
        </Typography>
      </CardContent>
      <div style={{width:'80%'}} className="colored-button">Details</div>
    </Card>
  );
}

export default BanInfoCard;