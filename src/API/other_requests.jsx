import { data } from "react-router-dom";
import EndPoints from "./endpoints";
import TokenAxios from "./tokenAxios";

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