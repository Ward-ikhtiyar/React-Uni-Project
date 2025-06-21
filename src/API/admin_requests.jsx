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
    return e.response.status;
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
    console.log(e.response.data);
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
export async function adminRejectProperty(id,message){
  try{
    let response=await TokenAxios.patch(`${EndPoints.Admin.rejectProperty}/${id}`,{
      message:message
    });
    if(response.status===200){
      console.log(response.data);
      return 200;
    }
  }catch(e){
    console.log(e);
    console.log(e.response.data);
    return e.response.status;
  }
}
