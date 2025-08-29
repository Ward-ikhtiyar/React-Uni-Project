import { useEffect, useState } from "react";
import Custom_Chip from "../../Profile/components/Chips/chip";
import TokenAxios from "../../../../API/tokenAxios";
import { adminGetUsers, getBannedUsers } from "../../../../API/admin_requests";
import AdminsWidget from "../super_admin/Admins/admins_widget";
import SearchTextField from "../components/search_text_field/search_text_field";
import UserDetails from "../../../components/Dialogs/Admin/user_details";

function AdminUsers(){
    const [chipVal,setChipVal]=useState(0);
    const[query,setQuery]=useState("");
    const [users,setUsers]=useState([]);
    const [userId,setUserId]=useState(0);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    const [detailsOpen,setDetailsOpen]=useState(false);
        
    const roleMap = {
        0: 'owner',
        1: 'agency',
        2:'pending'
    };

    async function getUsers(role, query, isBan = false) {
  try {
    setLoading(true);
    let fetchedUsers = isBan
      ? await getBannedUsers()
      : await adminGetUsers(role, query);

    if (Array.isArray(fetchedUsers)) {
      let filteredUsers = fetchedUsers.filter(
        (user) => user.userType !== "admin" && user.userType !== "super_admin"
      );
      setUsers(filteredUsers);
    }
  } catch (error) {
    setError(error);
    setUsers([]);
  } finally {
    setLoading(false);
  }
}
     
    useEffect(() => {
  console.log("changed chip");
  let role = roleMap[chipVal] ?? null;
  if (chipVal === 3) {
    getUsers(null, query, true);
  } else {
    getUsers(role, query, false);
  }
}, [chipVal]);

useEffect(() => {
  console.log("changed query");
  let role = roleMap[chipVal] ?? null;
  if (chipVal === 3) {
    getUsers(null, query, true);
  } else {
    getUsers(role, query, false);
  }
}, [query]);

    return (
        <>
        <div className="admin-info">
            <div className="admin-title">Users</div>
            <div className="admin-chips-row"  >
                <Custom_Chip title={"Owners"} index={0} val={chipVal} Click={()=>setChipVal(0)} />
                <Custom_Chip title={"Agencies"} index={1} val={chipVal} Click={()=>setChipVal(1)}/>
                <Custom_Chip title={"Pending"} index={2} val={chipVal} Click={()=>setChipVal(2)}/>
                <Custom_Chip title={"Banned"} index={3} val={chipVal} Click={()=>setChipVal(3)}/>
                    <div style={{width:'30vw'}}></div>
                <SearchTextField setValue={setQuery} hint={"Search Users"}/>
            </div>
            <div className="admin-body">
                {loading ? (
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'75vw'}}>
                        <div style={{fontSize:'50PX'}}>Loading...</div>
                    </div>
                ) : users.length !== 0 ? (
                    users.map((user,index)=> ( 
                        <div key={index} onClick={()=>{
                            setUserId(user.id);
                            setDetailsOpen(true);
                        }}>
                            <AdminsWidget admin={user}></AdminsWidget>        
                        </div>
                    ))
                ) : (
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'75vw'}} className='admin-body'>
                        <div style={{fontSize:'50PX'}}>No Users found.</div>
                    </div>
                )}
            </div>
        </div>
        <UserDetails id={userId} open={detailsOpen} onClose={()=>setDetailsOpen(false)} />
        </>
    );   
}

export default AdminUsers;