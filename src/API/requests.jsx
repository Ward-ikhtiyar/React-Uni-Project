import EndPoints from "./endpoints";
import TokenAxios from "./tokenAxios";
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
    try{
    let response =await TokenAxios.get(endpoint);
   let data=response.data;
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
    // console.log(data);
    return data;
  } 
}
  catch(e){
    console.log(e.response.data);
  }
  
}