import { useEffect, useState } from "react";
import './tab.css'
function ProfileTab({title,Icon,setIndex,index,val}){
    const[colorr,setcolor]=useState("black");
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
        setcolor('black');
    }}
    style={index==val?TabStyle.Selected:TabStyle.Unselected

} className='tab' onClick={handleClick} >
                        <Icon/>
                         {title}</div>
);

}
export default ProfileTab