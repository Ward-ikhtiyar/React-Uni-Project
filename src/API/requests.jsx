import EndPoints from "./endpoints";
import TokenAxios from "./tokenAxios";
import Axios from "./axios";

export async function resetPassword(id,password) {
  console.log('in reset password');
  console.log(id);
  console.log(password);
  try {
    let response = await TokenAxios.post(`${EndPoints.Auth.reset}/${id}`, { password: password })
    console.log(response.data);
    return response.status;
  }

  catch (e) {
    console.log(e.response.data)
  }
}

export async function reset(phone) {
  try {
    let response = await Axios.post(EndPoints.Auth.reset,
      {
        phone: phone
      });
    return response;
  } catch (e) {
    console.log(e.response.data);
    return e.response;
    }
} 

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
            localStorage.setItem("number",number);
            localStorage.setItem("password",password);
            localStorage.setItem("role",data.UserType);
            console.log(data.UserType);
            console.log(localStorage.getItem('token'));
            
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
  const propertData = {
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
    hasGarage: property.garage === "Yes",
    hasGarden: property.garden === "Yes",
    heatingType: "Central",
    flooringType: "Concrete",
    propertyType: "House",
    isFloor: false
  };
  try {
    console.log(propertData);
    const response = await TokenAxios.post(EndPoints.Properties.create, propertData);
    let data = response.data;
    if (data) {
      console.log("uploading pictures");
      console.log(data);
      console.log(response.status);
      uploadPropertyImage(property.photos, data);

    }
    return response.status;
  } catch (error) {
    console.log(error.response.data);
    return error.response.status;
  }
}

/////////////////////////////////////////update Property/////////////////////////////////////
export async function updateProperty(id, data) {
  console.log(`selected property is ${id}`)
  try {
    let response = await TokenAxios.patch(`${EndPoints.Properties.agentUpdateProperty}/${id}`, data);
    console.log(response.data);
    return response.status
  }
  catch (e) {
    console.log(e.response.data);
    return e.response.status
  }
}

////////////////////////////////// image Upload //////////////////////
export async function uploadPropertyImage(photos, id) {
  const formdata = new FormData();
  photos.forEach(photo => {
    formdata.append("property-images", photo.file);
  });
  console.log(formdata.getAll("property-images"));
  try {
    let response = await TokenAxios.post(
      `${EndPoints.Properties.uploadPhotos}/${id}`, formdata,
      {
        headers: {
          'Content-Type': 'multipart/form-data'  // This is optional; axios sets it automatically, but you can explicitly set here
        }
      }
    );
    let data = response.data;
    if (data) {
      console.log("images uploaded");
    }

  }
  catch (e) {
    console.log(e.response.data);
  }
}
///////////////get All & my Agent Properties //////////////
export async function getAgentAcceptedProperties() {
  let endpoint = EndPoints.Agent.getMyAgentProperties;
  console.log(endpoint)
  try {
    let response = await TokenAxios.get(endpoint);
    let data = response.data;
    console.log(data);
    if (data) {
      return data;
    }
  }
  catch (e) {
    console.log(e.response.data);
  }
}

///////////////get All & my Properties //////////////
function extractArray(payload) {
  if (!payload) return null;
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload.data)) return payload.data;
  if (Array.isArray(payload.properties)) return payload.properties;
  return null;
}
export async function getTopVotedProperties(mine) {
    let endpoint = mine === true ? EndPoints.Properties.getMine : EndPoints.Properties.getAll;
    try {
        const response = await TokenAxios.get('properties/top/6');
        const arr = extractArray(response.data);
        console.log('returned array');
        console.log(arr);
        if (arr) {
            return arr;
        }
        return [];
    } catch (e) {
        console.log(e.response?.data || e.message);
        return [];
    }
}

export async function getAcceptedProperties(mine) {
  if(!mine) console.log("ward is fetching all propertues");
  let endpoint = mine === true ? EndPoints.Properties.getMine : EndPoints.Properties.getAll;
  console.log(endpoint)
  try {
    let response = await TokenAxios.get(endpoint);
    let data = response.data;
    console.log(data);
    if (data) {
      return data;
    }
  }
  catch (e) {
    console.log("an error pccured in fetch all  request")
    throw e 
  }
}

///////////////get Filtered Porperties //////////////
export async function getFilteredProperties(minPrice, maxPrice, propertyType, searchRadius, locationSource) {
  let endpoint = EndPoints.Properties.getAll;
  console.log(endpoint)
  try {
    let response = await TokenAxios.get(endpoint, {
      params: {
        minPrice: minPrice,
        maxPrice: maxPrice,
        word: propertyType,
        searchRadius: searchRadius,
        locationSource: locationSource
      }
    });
    let data = response.data;
    console.log(data);
    if (data) {
      return data;
    }
  }
  catch (e) {
    console.log(e.response.data);
  }
}
///////////////get Top Score Porperties //////////////
export async function getTopScoreProperties() {
  let endpoint = EndPoints.Properties.getTop;
  // console.log(endpoint)
  try {
    let response = await TokenAxios.get(endpoint);
    let data = response.data;
    console.log(data);
    if (data) {
      return data;
    }
  }
  catch (e) {
    console.log(e.response.data);
  }
}
///////////////get All Agencies //////////////
export async function getAllAgencies(username) {
  let endpoint = EndPoints.Agent.getAgent;
  // console.log(endpoint)
  try {
    let response = await TokenAxios.get(endpoint, {
      params: {
        word: username,
      }
    });
    let data = response.data;
    console.log(data);
    if (data) {
      return data;
    }
  }
  catch (e) {
    console.log(e.response.data);
  }
}
///////////////get Agent By ID //////////////
export async function getAgentById(id) {
  let endpoint = EndPoints.Agent.getAgent;
  // console.log(endpoint)
  try {
    let response = await TokenAxios.get(endpoint, {
      params: {
        id: id,
      }
    });
    let data = response.data;
    console.log(data);
    if (data) {
      return data;
    }
  }
  catch (e) {
    console.log(e.response.data);
  }
}
///////////////get Agent properties //////////////
export async function getAgentProperties(id) {
  
  let endpoint = `${EndPoints.Agent.getMyAgentProperties}/${id}`;
  // console.log(endpoint)
  try {
    let response = await TokenAxios.get(endpoint, {
      // params: {
      //   id: id,
      // }
    });
    let data = response.data;
    console.log(data);
    if (data) {
      return data;
    }
  }
  catch (e) {
    console.log(e.response.data);
  }
}

/////////////////////get property Details//////////////////
export async function getDetails(id) {
  try {
    let response = await TokenAxios.get(`${EndPoints.Properties.getDetails}${id}`,);
    let data = response.data
    if (data) {
      // console.log(data);
      return data;
    }
  }
  catch (e) {
    console.log(e.response.data);
  }

}

//////////////////////////////delete property///////////////////////////
export async function deleteProperty(id, password) {
  try {
    let response = await TokenAxios.delete(`/properties-on/${id}`, {
      data: { password: password }
    });
    console.log(response.data);
    if (response.status === 200) {
      return 200;
    }
  }
  catch (e) {
    console.log(e.response.data);
    if (e.response.status === 401) {
      return 401;
    }
    if (e.response.status === 500) {
      return 500;
    }
  }
}

//////////////////////////get Favorites////////////////////////
export async function getFavorites() {
  try {
    let response = await TokenAxios.get(EndPoints.Favoirtes.getAll);
    let data = response.data
    if (data) {
      // console.log(data);
      return data;
    }
  }
  catch (e) {
    console.log(e.response.data);
  }

}

/////////////////////isFavorite///////////////////////////
export async function isFavorite(id) {
  try {
    let response = await TokenAxios.get(`${EndPoints.Favoirtes.isFavorite}/${id}`,);
    let data = response.data
    if (data) {
      // console.log(data);
      return data;
    }
  }
  catch (e) {
    console.log(e.response.data);
  }

}

///////////////////////////////setFavorite//////////////////////////////
export async function setFavorite(id) {
  try {
    let response = await TokenAxios.post(`${EndPoints.Favoirtes.setFavorite}/${id}`,);
    let data = response.data
    if (data) {
      await isFavorite(id);
      console.log(response.status);
      return data;
    }
  }
  catch (e) {
    console.log(e.response.data);
  }

}