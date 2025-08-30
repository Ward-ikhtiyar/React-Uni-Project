import { useState, useEffect } from "react";
import { getAgentPendingProperties } from "../../../API/requests";
import RE_Card from "../Search-Proporties/components/RE-Listing/RE-Card/RE-Card";

function RequestsPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        console.log("im appending please ");
        setLoading(true);
        const data = await getAgentPendingProperties(); 
        setRequests(data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load requests");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="profile-info">
      <div className="requests-title">Requests</div>

      <div className="profile-body">
        {loading && <p>Loading requests...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && !error && requests.length === 0 && (
          <p>No requests found.</p>
        )}

        {!loading &&
          !error &&
          requests.map((request) => (
            <RE_Card
              key={request.id}
              property={request}
              isEditable={false}
              destination={`/Agent/property?id=${request.id}`}
            />
          ))}
      </div>
    </div>
  );
}

export default RequestsPage;
