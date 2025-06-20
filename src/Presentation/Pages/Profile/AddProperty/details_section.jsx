import { BedOutlined,ShowerOutlined,AreaChartOutlined,LocationOnOutlined,YardOutlined,GarageOutlined,CameraAltOutlined, AddAPhoto, AddAPhotoOutlined,Add } from "@mui/icons-material";
import SmallTextField from "../../../components/ward/small_textField";
import InfoTab from "./components/info_tab";
import InfoSelect from "./components/info_select";
import InfoRadio from "./components/info_radio";
import AddPropertyPics from "./components/add_photos";
import { useProperty } from "../../../../consts/context";
import { Fab,CircularProgress } from "@mui/material";
import { useState } from "react";
import { createProperty } from "../../../../API/requests";
function DetailsSection(){
    async function handleAddProperty(property){
        setIsLoading(true)
        if(photos.length<1){
                    setIsError(true);
        setMsg('Please provide images of the property');            
                setTimeout(()=>{
            setIsError(false);
        setMsg('');
        },2000)
        setIsLoading(false);
        return;

    }else{
    let response =await createProperty(property);
     if(response===201){
        setIsLoading(false);
            setIsSuccess(true);
            setMsg("Property Created")
                setTimeout(()=>{
            setIsSuccess(false);
        setMsg('');
        },2000)
    }   
    if(response===502){
        setIsError(true);
        setMsg('Please Select a Location');
        setIsLoading(false);
setTimeout(()=>{
            setIsError(false);
        setMsg('');
        },2000)
    }
    if(response===400){
        setIsError(true);
        setMsg('Please Fill All The Fields !');
        setIsLoading(false);
        setTimeout(()=>{
            setIsError(false);
        setMsg('');
        },2000)
    }
    }}
    const[isLoading,setIsLoading]=useState(false);
    const property=useProperty();
    const{bedrooms,setBedrooms,bathrooms,setBathrooms,area,setArea, 
        flooring, setFlooring,heating, setHeating,floors, setFloors,
        garage,setGarage,garden,setGarden,setIsError,setMsg,photos,setIsSuccess
                        }=useProperty();
    const FloorTypes=["----choose option----","Ceramic","Wood","Carpet","Tile"];
    const HeatingTypes=["----choose option----","Central","Gas","Electric","Solar"];
    const [clicked,setClicked]=useState(false);
    return(
        <div id="addProperty-info"  >
            <AddPropertyPics/>
        <div style={{  width:'100%', display:'flex', flexDirection:'row',justifyContent:'space-around' }}>
            <SmallTextField val={bedrooms} setVal={setBedrooms} isArea={false} Icon={BedOutlined}/>
            <SmallTextField val={bathrooms} setVal={setBathrooms} isArea={false} Icon={ShowerOutlined}/>
            <SmallTextField val={area} setVal={setArea} isArea={true} Icon={AreaChartOutlined}/>
        </div>
        <div style={{height:'50px'}}></div>
        <InfoSelect val={flooring} setVal={setFlooring} title={`Flooring` } options={FloorTypes}/>
        <InfoSelect val={heating} setVal={setHeating} title={`Heating `} gap={22} options={HeatingTypes}/>
        <InfoRadio val={garage} setVal={setGarage} option1={"Yes"} option2={"No"} title={"Garage"} Icon={YardOutlined}/>
        <InfoRadio val={garden} setVal={setGarden} option1={"Yes"} option2={"No"} title={"Garden"} Icon={GarageOutlined}/>
        <Fab onClick={()=>{handleAddProperty(property)}}    sx={{'&:hover':{
                    backgroundColor:'white',color:'var(--app-blue)'
                },color:'var(--app-blue)',backgroundColor:'white',position:'fixed',bottom:'0',right:'0',borderRadius:'5px' ,marginRight:'40px',marginBottom:'100px',width:'120px',fontFamily:'Lexend' ,height:'40px'}}>{isLoading?<CircularProgress  sx={{color:'var(--app-blue)',scale:'70%'}}/>:"Upload"}</Fab>
        </div>
        
    );
}
export default DetailsSection