import EndPoints from "./endPoints";
import TokenAxios from "./tokenAxios"
export function getPendingProperties(){
    let response =TokenAxios.get(EndPoints.Admin.getAllProperties);
    if(response.data){
        return response.data;
    }
}
