import "./admin_statistics.css"
import AdminCard from "../components/admin_card";
import AdminChart from "../components/AdminChart";
import { House, Person, PendingActions, Feedback, SwapVert, ListAlt,CurrencyExchange} from "@mui/icons-material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { adminGetStatistics } from "../../../../API/admin_requests";
import { useState, useEffect } from "react";
import AdminStatsChart from "../components/Admin_chartt";
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
                    <AdminCard title="Total Properties" Icon={House} value={statistics?.TotalCounts.Properties ?? 0} />
                    <AdminCard title="Total Users" Icon={Person} value={statistics?.TotalCounts.Users ?? 0} />
                    <AdminCard title="Total Agencies" Icon={BusinessCenterIcon} value={statistics?.TotalCounts.Agencies ?? 0} />
                    <AdminCard title="Total Complaints" Icon={Feedback} value={statistics?.TotalCounts.Complaints ?? 0} />

                </div>
                <div className="admin-statistics-cards-row">
                    <AdminCard title="All Time Subsciptions" Icon={ListAlt} value={statistics?.TotalCounts["Active Subscriptions"] ?? 23} />
                    <AdminCard title="Total Active Subs " Icon={SubscriptionsIcon} value={statistics?.TotalCounts.Users ?? 0} />
                    <AdminCard title="Voting interactions" Icon={SwapVert} value={statistics?.TotalCounts['Voting interactions'] ?? 0} />
                    <AdminCard title="Refunds" Icon={CurrencyExchange} value={statistics?.TotalCounts['Fixed Refund Complaints'] ?? 0} />

                </div>
                <h2>App Activity Overview</h2>
                <div className="admin-statistics-charts-row">
                    <div className="activity-chart-container">
                        <AdminChart 
                            title="Monthly Activity Metrics" 
                            data={statistics?.MonthlyStats}
                            multiLine={true} 
                        />
                        
                        
                        
                    </div>
                    <div className="activity-chart-container">
                    <AdminStatsChart
                        title={"Users Requests Metrics"}
                        data={statistics?.MonthlyStats}
                        />
                      </div>  
                </div>
            </div>
        </div>
    )
}

export default AdminStatistics;