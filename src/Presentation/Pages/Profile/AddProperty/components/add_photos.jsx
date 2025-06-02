import { Add } from "@mui/icons-material";
import { div } from "framer-motion/client";
import { useState } from "react";
import { useProperty } from "../../../../../consts/context";

function AddPropertyPics() {
    const {setPhotos,photos}=useProperty();

    const handleAddingPhotos = (addedPhoto) => {
        console.log("image added");
        const imgUrl=URL.createObjectURL(addedPhoto);
        setPhotos(prev => [...prev, {file:addedPhoto,url:imgUrl}]); 
        console.log(photos);
    };
    
    return (
        <div style={{  width: '100%', height: "100%" }}>
            <p className="addInfo-title">Photos</p> 
            
            <div className="addProperty-picture" style={{ height: "30vh", width: '100%' }}>
                {photos.map(element=>(<div className="addProperty-picture" id="addedPics" style={{backgroundImage:`url(${element.url})`,backgroundSize:'contain',borderRadius:'5px'}}/>)
                    
                )}
                <input 
                    type="file"  
                    id="addPic" 
                    onChange={(e) => {
                        handleAddingPhotos(e.target.files[0])
                        console.log(e.target.files[0]);
                    }}/>
                <label htmlFor="addPic" className="addPhoto">
                    <Add sx={{ scale: '150%' }}/>
                </label>
                
            </div>
        </div>        
    );
}

export default AddPropertyPics;