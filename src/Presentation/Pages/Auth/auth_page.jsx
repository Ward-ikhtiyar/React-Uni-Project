// import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
// import { faGoogle,faFacebook,faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";
import LoginButton from './loginButton';
import './auth_page.css'
function Login_page(){
    const [password,setPassword]=useState("");
    const [user_number,setNumber]=useState("");
    return(
        <div className="mainLogin-div">
            <div className="leftLoginPanel">
                <h2>Don`t Have An Account ? </h2>
                <p className='leftPanel-subTitle'>Sign up today for exclusive deals and seamless shopping!</p>
                <button className="button">Sign up</button>
            </div>
            <div className="rightLoginPanel">
                <h1>SpeedOrder</h1>
                <h4>Where Quality and effeciency meet.</h4>
                <input id="userNum"  className="Text-Box" placeholder="Number" value={user_number} onInput={(e)=>{
                    setNumber(e.target.value);
                    console.log(user_number);
                    }}></input>
                <input id="userPass"  className="Text-Box" placeholder="Password" value={password} onInput={(e)=>{
                    setPassword(e.target.value);
                    console.log(password);
                }}></input>
                <LoginButton number={user_number} password={password} />
                <h6>- other Methods: - </h6>
                {/* <div className="Icons-Row">
                    <button className="IconButton"  ><FontAwesomeIcon className="Icons" 
                     icon={faGoogle}/>   </button>
                     <button className="IconButton" ><FontAwesomeIcon className="Icons" 
                     icon={faFacebook}/>   </button>
                     <button className="IconButton" ><FontAwesomeIcon className="Icons" 
                     icon={faXTwitter}/>   </button>
                </div> */}
            </div>
            
        </div>
        
    );
}
export default Login_page