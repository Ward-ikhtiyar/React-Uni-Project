import './admin_card.css'
function AdminCard({title,Icon,value}){
return(
    <div className='admin-stat-card'>
                    <div className='admin-stat-card-title'>
                                {title}
                                </div> 
                            <div className='admin-stat-card-body'>
                                <div style={{backgroundColor:'var(--app-blue-opaque)', width:'60px',height:'60px', justifyContent:'center',alignItems:'center',display:'flex',borderRadius:'50%'}} >
                                     <Icon style={{color:'var(--app-blue)',scale:'150%'}}/>
                                </div>
                                {value}
                             </div> 
                    </div>
);
}
export default AdminCard