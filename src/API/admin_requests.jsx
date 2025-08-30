import EndPoints from "./endPoints";
import TokenAxios from "./tokenAxios"
export async function getPendingProperties(){
  let endPoint=localStorage.getItem("role")==="super_admin"?EndPoints.Admin.getAllPropertiesSuperAdmin:EndPoints.Admin.getAllProperties;
    try{
    let response =await TokenAxios.get(endPoint);
    console.log(response);
    if(response.data){
         
        return response.data;
    }}
    catch(e){
        console.log(e);
        console.log(e.response.data);
    }

}

export async function adminGetPropertyDetails(id) {
  try{
  let response=await TokenAxios.get(`${EndPoints.Properties.getDetails}${id}`,);
  let data= response.data 
  if(data){
    // console.log(data);
    return data;
  } 
}
  catch(e){
    console.log(e.response.data);
  }
  
}
export async function adminGetStatistics(){
  try{
    let response=await TokenAxios.get(EndPoints.Admin.getStatistics);
    let data= response.data 
    console.log(data);
    if(data){
      return data;
    } 
  }catch(e){
    console.log(e);
    console.log(e.response.data);
    throw e;
  }
}
export async function adminDeleteAdmin(id){
  try{
    let response=await TokenAxios.delete(`${EndPoints.Admin.deleteAdmin}/${id}`);
    let data= response.data 
    if(data){
      return 200;  
    }
  }catch(e){
    console.log(e);
    console.log(e.response.data);
    return e.response.status;
  }
}
export async function adminHideProperty(id){
  try{
    let response=await TokenAxios.patch(`${EndPoints.Admin.hideProperty}/${id}`,{
       status : "Hidden"
    });
    let data= response.data 
    if(data){
      return 200;  
    }
  }catch(e){
    console.log(e);
    console.log(e.response.data);
    throw e;
  }
}

export async function adminAddAdmin(name,number,password,age){
  try{
    let response=await TokenAxios.post(EndPoints.Admin.addAdmin,{
      username:name,
      phone:number,
      password:password,
      age:age
    });
    let data= response.data 
    if(data){
      return 201;
    }
  }catch(e){
    console.log(e.response.data);
  }
}

export async function adminGetAdmins(){
  try{
    let response=await TokenAxios.get(EndPoints.Admin.getAdmins);
    let data= response.data 
    if(data){
      return data;
    }
  }catch(e){
    console.log(e);
    console.log(e);
    throw e;
  }
}
export async function adminGetAdminDetails(id){
  try{
    let response=await TokenAxios.get(`${EndPoints.Admin.getAdminDetails}/${id}`);
    let data= response.data 
    if(data){
      return data;
    }
  }catch(e){
    console.log(e);
    console.log(e.response.data);
  }
}
export async function adminGetUserDetails(id){
  try{
    let response=await TokenAxios.get(`${EndPoints.Admin.getuserDetails}/${id}`);
    let data= response.data 
    if(data){
      return data;
      console.log(data)
    }
  }catch(e){
    console.log(e);
    console.log(e.response.data);
  }
}

export async function adminBlockUser(){
  try{
    let response=await TokenAxios.post(EndPoints.Admin.ban);
    if(response){
      return response;
    }
  }catch(e){
    throw e;
  }
}
export async function adminGetLogs(){
  try{
    let response=await TokenAxios.get(EndPoints.Admin.getLogs);
    let data= response.data 
    if(data){
      return data;
    }
  }catch(e){
    console.log(e);
    console.log(e.response.data);
  }
}
export async function adminAcceptProperty(id,rating){
  try{
    let response=await TokenAxios.patch(`${EndPoints.Admin.acceptProperty}/${id}`,{
      rating:rating
    });
     
    if(response.status===200){
      return 200;
    }
  }catch(e){
    console.log(e);
    console.log(e.response.data);
    return e.response.status;
  }
} 
export async function adminRejectProperty(id,password){
  try{
    let response=await TokenAxios.delete(`${EndPoints.Admin.rejectProperty}/${id}`,{
      password:password
    });
    if(response.status===200){
      console.log(response.data);
      return 200;
    }
  }catch(e){
    console.log(e);
    console.log(e.response.data);
    throw e
  }
}
export async function adminAddPlan(type,duration,price,description,limit){
  try{
    let response=await TokenAxios.post(`${EndPoints.Admin.addNewPlan}`,{
  planDuration: duration,      
  description: description,
  planType: type,          
  planPrice: Number(price),
  limit:Number(limit)              
});
    return 200;
  }catch(e){
    console.log(e);
    console.log(e.response.data);
    return e.response.status;
  }
}
export async function adminUpdatePlan(data,planId){
  try{
    let response=await TokenAxios.patch(`${EndPoints.Admin.addNewPlan}/${planId}`,data);
    return response.data;
  }catch(e){
    console.log(e);
    console.log(e.response.data);
    throw e
  }
}

export async function adminGetUsers(role, query) {
  console.log('params')
  console.log(`${role}, ${query}`);
  let url = `${EndPoints.Admin.getUsers}`;
  const params = new URLSearchParams();
  
  if (role && role.trim() !== '') {
    params.append('role', role);
  }
  
  if (query && query.trim() !== '') {
    params.append('word', query);
  }
  
  if (params.toString()) {
    url += `?${params.toString()}`;
  }
  console.log('ward is cryhing');
  console.log(url);
  
  try {
    const response = await TokenAxios.get(url);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log('Error:', e.response?.data || e.message);
    throw e; 
  }
}

export async function adminGetReports(isPending) {
  let endPoint=isPending?`${EndPoints.Admin.getReports}/pending`:`${EndPoints.Admin.getReports}`
    try {
    const response = await TokenAxios.get(endPoint);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log('Error:', e.response?.data || e.message);
    throw e; 
  }
}
export async function markAsSeen(id,isFixed) {
    try {
    const response = await TokenAxios.patch(`${EndPoints.Admin.getReports}/${id}?action=${isFixed}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log('Error:', e.response?.data || e.message);
    throw e; 
  }
}
////////////////////////Banned///////////////////////////

export async function getBannedUsers() {
  try {
    const response = await TokenAxios.get(`${EndPoints.Admin.ban}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log('Error:', e.response?.data || e.message);
    return 400; 
  }
}
///////////////////////////Logs/////////////////////////

export async function getAdminLogs(id) {
  try {
    const response = await TokenAxios.get(`${EndPoints.Admin.adminLogs}/${id}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log('Error:', e.response?.data || e.message);
    return 400; 
  }
}