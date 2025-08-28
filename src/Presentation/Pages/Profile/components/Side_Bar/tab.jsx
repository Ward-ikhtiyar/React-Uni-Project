import { useEffect, useState } from "react";
import './tab.css'
function ProfileTab({title,Icon,UnselectedIcon,setIndex,index,val}){
    const[colorr,setcolor]=useState("var(--app-font)");
const TabStyle = {
    Unselected:{
        cursor:'pointer',
        color: colorr,
  width: "90%",
  padding: "10px",
  display: "flex",
  gap: "5%",
  flexDirection: "row",
    },
    Selected:{
        
backgroundColor: "var(--app-blue-opaque)",
  color: "var(--app-blue)",
  opacity: 0.9,
  transition: "0.2s",
  cursor: "pointer",
  borderLeft: "5px solid var(--app-blue)",
    }
  
};



const handleClick=()=>{
    setIndex(index);
}
return(
    <div
    onMouseEnter={()=>{
        setcolor('var(--app-blue)');
    }}
    onMouseLeave={()=>{
        setcolor('var(--app-font)');
    }}
    style={index==val?TabStyle.Selected:TabStyle.Unselected

} className='tab' onClick={handleClick} >
                        {index==val?<Icon/>:<UnselectedIcon/>}
                         {title}</div>
);

}
export default ProfileTab