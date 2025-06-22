import { data } from "react-router-dom";
import EndPoints from "./endpoints";
import TokenAxios from "./tokenAxios";

export async function getProfile() {
    let response=await TokenAxios.get(EndPoints.User.Me);
    let data=response.data;
    if(data){
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
 try{
    let response=await TokenAxios.get(EndPoints.Plans.getAll);
    let data =response.data;
    if(data){
        return data
    }
}
catch(e){
    console.log(e.response.data);
}
}
export async function createPlan(id) {
    let mydata={
    planId : `${id}`,
    payment_Method_Type : "card",
    dataAfterPayment: {
    success_url:"http://localhost:5173",
    cancel_url: "http://localhost:5173"}
    }
 try{
    let response=await TokenAxios.post(EndPoints.Plans.createPlan,mydata);
    let data =response.data;
    if(data){
        return data.url
    }
}
catch(e){
    console.log(e.response);
}
}
export async function upVote(id){
    try{
        let response=await TokenAxios.post(`${EndPoints.Favoirtes.vote}/${id}/${1}`,
            
        );
        let data=response.data;
        if(data){
            return data.voteScore;
        }
    }
    catch(e){
        console.log(e.response.data);
    }
}

export async function downVote(id){
    try{
        let response=await TokenAxios.post(`${EndPoints.Favoirtes.vote}/${id}/${-1}`,
            
        );
        let data=response.data;
        if(data){
            return data.voteScore;
        }
    }
    catch(e){
        console.log(e.response.data);
    }
}