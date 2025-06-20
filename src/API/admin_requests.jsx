import EndPoints from "./endPoints";
import TokenAxios from "./tokenAxios"
export async function getPendingProperties(){
    try{
        
    let response =await TokenAxios.get(EndPoints.Admin.getAllProperties);
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
