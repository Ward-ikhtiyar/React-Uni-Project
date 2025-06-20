import "./admin_statistics.css"
import AdminCard from "../components/admin_card";
import AdminChart from "../components/AdminChart";
import { House, Person, PendingActions, Feedback } from "@mui/icons-material";

function AdminStatistics(){
    const activityData = [
        { name: 'Jan', properties: 50, users: 30, contracts: 20, feedback: 15 },
        { name: 'Feb', properties: 65, users: 45, contracts: 25, feedback: 20 },
        { name: 'Mar', properties: 80, users: 55, contracts: 35, feedback: 25 },
        { name: 'Apr', properties: 85, users: 70, contracts: 40, feedback: 30 },
        { name: 'May', properties: 95, users: 85, contracts: 45, feedback: 35 },
        { name: 'Jun', properties: 100, users: 100, contracts: 50, feedback: 40 },
        { name: 'Jul', properties: 100, users: 100, contracts: 50, feedback: 40 },
        { name: 'Aug', properties: 100, users: 100, contracts: 50, feedback: 40 },
        { name: 'Sep', properties: 100, users: 100, contracts: 50, feedback: 40 },
        { name: 'Oct', properties: 100, users: 100, contracts: 50, feedback: 40 },
        { name: 'Nov', properties: 100, users: 100, contracts: 50, feedback: 40 },
        { name: 'Dec', properties: 100, users: 100, contracts: 50, feedback: 40 },
    ];

    return(
        <div className="admin-info">
            <div className="admin-title">Dashboard</div>
            <div className="admin-statistics-body">
                <div className="admin-statistics-cards-row">
                    <AdminCard title="Total Properties" Icon={House} value="100" />
                    <AdminCard title="Total Users" Icon={Person} value="100" />
                    <AdminCard title="Total Contracts" Icon={PendingActions} value="100" />
                    <AdminCard title="Total FeedBack" Icon={Feedback} value="100" />
                </div>
                <div className="admin-statistics-charts-row">
                    <div className="activity-chart-container">
                        <h2>App Activity Overview</h2>
                        <AdminChart 
                            title="Monthly Activity Metrics" 
                            data={activityData}
                            multiLine={true} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminStatistics;