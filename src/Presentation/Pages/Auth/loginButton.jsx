// import { useNavigate } from "react-router-dom";




function LoginButton(props){
     async function Login_request (number,password){
        const formData=new FormData();
        formData.append("user_phone",number);
        formData.append("password",password);
        console.log(`userdata:${number} and ${password}`);
    
       let response= await fetch(`http://127.0.0.1:8000/api/auth/login`,{
                    method:"POST",
                    redirect:"follow",    
                    body:formData,
                },);
                if(response.ok){
                    let data=await response.json();
                    localStorage.setItem("token",data.access_token);
                    console.log(data.access_token);
                    // NavigateHome();
                }else{console.error("login failed",response.status);}
    }
    // const navigate=useNavigate();
    // const NavigateHome=()=>{
        
    //     navigate("/home",{replace:true});
    // }
    return(
        <button id='LoginButton' className="button" onClick={()=>Login_request(props.number,props.password)} >Login</button>
    );
}
export default LoginButton