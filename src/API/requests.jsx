import EndPoints from "./endpoints";
import TokenAxios from "./tokenAxios";
import Axios from "./axios";
export async function login(number,password){
  console.log('in sign in ');
  console.log(number);
  console.log(password);
        try{
        let response=await Axios.post(EndPoints.Auth.Login,
        {
           phone: number,
           password:password
        });
        let data=response.data;
        
        console.log(`printing ${data}`);
        
        if(data.accessToken){
            console.log(`loginSuccess:${data.accessToken}`);
            localStorage.setItem("token",data.accessToken);
            return 200;
        }else{
            
            console.log("error in token");
        }}
        catch(e){
          console.log(e.response);
          return e.response.status;
           
        }
    }
////////////////// create property /////////////////
export async function createProperty(property) {
    const propertData= {
      title: property.title,
      description: property.description,
      isForRent: property.commerce === "Rent", 
    price: Number(property.price),
      pointsDto: {
        lat: property.location.lat,
        lon: property.location.lng
      },
      rooms: Number(property.bedrooms),
      bathrooms: Number(property.bathrooms),
      area: Number(property.area),
      floorNumber: Number(property.floors),
      hasGarage: property.garage==="Yes",
      hasGarden: property.garden==="Yes",
      heatingType: "Central",
      flooringType: "Concrete",
      propertyType: "House",
      isFloor: false 
    };
  try {
    console.log(propertData);
    const response = await TokenAxios.post(EndPoints.Properties.create,propertData);
    let data=response.data;
    if(data){
        console.log("uploading pictures");
        console.log(data);
        uploadPropertyImage(property.photos,data);
    }
    return response.data;
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
}
/////////////////////////////////////////update Property/////////////////////////////////////
export async function updateProperty(id,data){
  console.log(`selected property is ${id}`)
  try{
  let response=await TokenAxios.patch(`${EndPoints.Properties.getMine}/${id}`,data);
  console.log(response.data);
    return response.status
  }
  catch(e){
    console.log(e.response.data);
    return e.response.status
  }
}
////////////////////////////////// image Upload //////////////////////
export async function uploadPropertyImage(photos,id){
    const formdata=new FormData();
    photos.forEach(photo => {
     formdata.append("property-images",photo.file);       
    });
    console.log(formdata.getAll("property-images"));
    try{ 
    let response=await TokenAxios.post(
        `${EndPoints.Properties.uploadPhotos}/${id}`,formdata,  
 {  headers: {
      'Content-Type': 'multipart/form-data'  // This is optional; axios sets it automatically, but you can explicitly set here
    }
} 
    );
    let data=response.data;
    if(data){
        console.log("images uploaded");
    }

}
catch(e){
    console.log(e.response.data);
}
}
///////////////get All & my Properties //////////////
export async function getAcceptedProperties(mine) {
    let endpoint=mine===true?EndPoints.Properties.getMine:EndPoints.Properties.getAll; 
    console.log(endpoint)
    try{
    let response =await TokenAxios.get(endpoint);
   let data=response.data;
   console.log(data);
   if(data){
    return data;
   }
}
 catch(e){
    console.log(e.response.data);
 }   
}
/////////////////////get property Details//////////////////
export async function getDetails(id) {
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
//////////////////////////////delete property///////////////////////////
export async function deleteProperty(id,password){
  try{
    let response=await TokenAxios.delete(`/property/${id}`,{
      data:{password:password}
    });
    console.log(response.data);
    if(response.status===200){
      return 200;
    }
  }
  catch(e){
    console.log(e.response.data);
    if(e.response.status===401){
      return 401;
    }
    if(e.response.status===500){
      return 500;
    }
  }
}
//////////////////////////get Favorites////////////////////////
export async function getFavorites() {
  try{
  let response=await TokenAxios.get(EndPoints.Favoirtes.getAll);
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
/////////////////////isFavorite///////////////////////////
export async function isFavorite(id) {
  try{
  let response=await TokenAxios.get(`${EndPoints.Favoirtes.isFavorite}/${id}`,);
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
///////////////////////////////setFavorite//////////////////////////////
export async function setFavorite(id) {
  try{
  let response=await TokenAxios.post(`${EndPoints.Favoirtes.setFavorite}/${id}`,);
  let data= response.data 
  if(data){
    await isFavorite(id);
    console.log(response.status);
    return data;
  } 
}
  catch(e){
    console.log(e.response.data);
  }
  
}