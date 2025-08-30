import { data } from "react-router-dom";
import EndPoints from "./endPoints";
import TokenAxios from "./tokenAxios";

export async function getProfile() {
    console.log("im going through get profile");
    let response = await TokenAxios.get(EndPoints.User.Me);
    let data = response.data;
    if (data) {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("number", number);
      localStorage.setItem("password", password);
      localStorage.setItem("role", data.userType);
      console.log(data.UserType);
      console.log(localStorage.getItem('token'));
        return data;
    }
}
export async function getOwnerInfo(id) {
    try {
        const response = await TokenAxios.get(`${EndPoints.User.getOwnerInfo}/${id}`);
        if (response.status === 200 && response.data) {
            return response.data;
        }
        return null;
    } catch (e) {
        console.error('Error fetching owner info:', e.response?.data || e.message);
        return null;
    }
}
export async function getPlans() {
    try {
        let response = await TokenAxios.get(EndPoints.Plans.getAll);
        let data = response.data;
        if (data) {
            return data
        }
    }
    catch (e) {
        console.log(e.response.data);
    }
}
export async function createPlan(id) {
    console.log("whatatatatatatat");
    console.log(id)
    let mydata = {
        planId: String(id),
        payment_Method_Type: "card",
        dataAfterPayment: {
            success_url: "http://localhost:5173",
            cancel_url: "http://localhost:5173"
        }
    }
    try {
        let response = await TokenAxios.post('webhook', mydata);
        let data = response.data;
        if (data) {
            return data.url
        }
    }
    catch (e) {
        console.log(e.response);
    }
}
export async function upVote(id) {
  try {
    let response = await TokenAxios.post(`${EndPoints.Favoirtes.vote}/${id}/1`);
    return response.data; // return full object { voteScore: ... }
  } catch (e) {
    console.log(e.response.data);
  }
}

export async function downVote(id) {
  try {
    let response = await TokenAxios.post(`${EndPoints.Favoirtes.vote}/${id}/-1`);
    return response.data; // return full object { voteScore: ... }
  } catch (e) {
    console.log(e.response.data);
  }
}

export async function postComplaint(complaint) {
    console.log(`myEmail is :${complaint.myEmail}`);
    console.log(`desc is :${complaint.description}`);
    console.log(`title is :${complaint.title}`);

    try{

        let response=await TokenAxios.post(EndPoints.User.report,
        {
            title:complaint.title,
            reason:'Other',
            otherReason:complaint.description,
            description:complaint.description,
            myEmail:complaint.myEmail,

        });
        if(response){
            return response;
        }
    }catch(e){
        console.log(e.response.data);
        throw e
    }
    
}

export async function getComplaints() {
    try{
        let response=await TokenAxios.get(EndPoints.User.report,);
        if(response){
            return 200;
        }
    }catch(e){
        console.log(e.response.data);
    }
    
}

export async function uploadAgentImage(image, onUploadProgress) {
    try {
        const formData = new FormData();
        formData.append('user-image', image);
        const endPoints = EndPoints.User.UploadImg;
        const response = await TokenAxios.post(endPoints, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: onUploadProgress // Fixed: removed the extra object wrapping
        });
        console.log(response.data); 
        return response.data;
    } catch (error) {
        console.error('Error uploading agent image:', error);
        throw error; // Re-throw the error so it can be caught by the hook
    }
}