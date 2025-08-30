import InfoSelect from "./components/info_select";
import InfoTab from "./components/info_tab";
import { Fab } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import InfoRadio from "./components/info_radio";
import { useProperty } from "../../../../consts/context";
function InfoSection({clicked,open,setOpen}){
        const HouseTypes=["----choose option----","House","Apartment","Villa","Land"];
        const{title,setTitle,commerce,setCommerce,type,setType,price,setPrice,setLocation,description,setDescription,floors,setFloors}=useProperty();
    return(
        <div className ={clicked?'swiped':''} id="addProperty-info" >
                <div style={{ width:'100%', display:'flex', justifyContent:'space-between',flexDirection:'row',fontSize:'30px',color:'var(--app-blue)',marginTop:'20px'}}>
                    AddProperty
                    <div onClick={()=>setOpen(false)}>
                        <Close className="close-icon" sx={{ fontSize:'35px',marginRight:'20px'}} />
                    </div>
                </div>
                <InfoTab type={"text"} val={title} setVal={setTitle} title={"title"}/>
                <InfoTab type={"number"} val={price} setVal={setPrice}  title={"Price"}/>
        <InfoTab val={floors} setVal={setFloors}  title={"Floors"}/>
                <div className="addInfo-tab" >
        <p className='addInfo-title'> Description </p>                                        
  <textarea value={description} onChange={(e)=>setDescription(e.target.value)} id='addInfo-input' className="inputBox" style={{marginBottom:'10px', borderRadius:'8px', height:'120px',lineHeight:'2',fontWeight:'300',fontSize:'18px'}} />
                                        </div>
                <InfoSelect val={type} setVal={setType}  title={"Type"} options={HouseTypes}/>
                <InfoRadio setVal={setCommerce} val={commerce} option1={"Rent"} option2={"Sale"} title={"For"}/>
                </div> 
    );
}
export default InfoSection

