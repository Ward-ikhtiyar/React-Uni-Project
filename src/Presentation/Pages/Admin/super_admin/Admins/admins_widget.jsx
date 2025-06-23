import './admins_widget.css'
function AdminsWidget({admin}){
    return(
        <div className="admin-widget">
            {admin.profileImage !=null? <img className="admin-widget-img" alt="Admin" src={`http://localhost:3000/admin/images/${admin.profileImage}`} /> : <img className="admin-widget-img" alt="Admin" src={`public/assets/images/adminAvatar.svg`} />}
            <p>{admin.username}</p>            
        </div>
    )
}

export default AdminsWidget;