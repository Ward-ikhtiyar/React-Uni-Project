import "./admin_statistics.css"
import AdminCard from "../components/admin_card";
import AdminChart from "../components/AdminChart";
import { House, Person, PendingActions, Feedback } from "@mui/icons-material";
import { adminGetStatistics } from "../../../../API/admin_requests";
import { useState, useEffect } from "react";
function AdminStatistics(){
    const[statistics,setStatistics]=useState(null);
    useEffect(()=>{
        adminGetStatistics().then((data)=>{
            console.log("data");
            console.log(data.monthlyStats);
            setStatistics(data);
        });
    },[]);
    return(
        <div className="admin-info">
            <div className="admin-title">Dashboard</div>
            <div className="admin-statistics-body">
                <div className="admin-statistics-cards-row">
                    <AdminCard title="Total Properties" Icon={House} value={statistics?.totalCounts.properties ?? 0} />
                    <AdminCard title="Total Users" Icon={Person} value={statistics?.totalCounts.users ?? 0} />
                    <AdminCard title="Total Complaints" Icon={Feedback} value={statistics?.totalCounts.complaints ?? 0} />
                </div>
                <div className="admin-statistics-charts-row">
                    <div className="activity-chart-container">
                        <h2>App Activity Overview</h2>
                        <AdminChart 
                            title="Monthly Activity Metrics" 
                            data={statistics?.monthlyStats}
                            multiLine={true} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminStatistics;