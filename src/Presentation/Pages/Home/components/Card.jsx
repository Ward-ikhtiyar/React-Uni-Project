import { AccessTime, Edit, HouseOutlined, Timeline } from "@mui/icons-material";
import "./card.css"
function Card({plan,onClick,isAdmin}){
   
    return (
        <div id="card" className="card">
            <div className="text-info">
                <div className="name">{plan.planType}</div>
                <div className="name" style={{color:'var(--app-font)',scale:'90%'}}>{plan.planPrice}</div>
            <div className="details">
              <div className="detail-line"><AccessTime sx={{color:'var(--app-blue)'}}/>{String(plan.planDuration).replace('_'," ")}</div> 
              <div className="detail-line"><HouseOutlined sx={{color:'var(--app-blue)'}}/>{String(plan.limit)} Properties</div>  

            <div style={{marginTop:'20px',minHeight:'50px'}}>{String(plan.description)}</div>    
            <button onClick={()=>onClick()} className="colored-button" style={{width:'200px',height:'40px',marginTop:'30px'}}>{isAdmin?<div><Edit/></div>:Upgrade}</button>
            </div>
            </div>      
        </div>
    );
}
export default Card