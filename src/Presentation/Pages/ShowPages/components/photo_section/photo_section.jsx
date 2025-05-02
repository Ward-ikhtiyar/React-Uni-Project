import './photo_section.css'
import { CameraAltOutlined } from '@mui/icons-material';
import {  FavoriteBorderOutlined, LocationOnOutlined, Share } from '@mui/icons-material';
import AdditionalPhoto from '../additional_info/additional-photo';
import Chip from '../../../../components/ward/chips';
import { useState } from 'react';
function PhotoSection({name,location,photos,isFavorite,Housetype,commerce}){
    const[pickedImage,setPickedImage]=useState(0);
    // {backgroundImage:`url(${location[pickedImage]})`}
    // https://plus.unsplash.com/premium_photo-1723489682171-763c15cd79e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
    // https://picsum.photos/200/300
    return(
        <div style={{backgroundImage:`url(${photos[pickedImage]})`}} className='photos-section'>
        <div className='additional-photos'>
            <AdditionalPhoto onClick={()=>{
                setPickedImage(0);
                console.log(pickedImage);
            }}/>
            <AdditionalPhoto onClick={()=>{
                setPickedImage(1);
                console.log(pickedImage);
            }}/>
            <div className='more-photos'>
              <CameraAltOutlined/>
              <div>More</div>  
            </div>
        </div>
        <div className='overlaying-info'>
            <div className='overlaying-first' >
                <Chip text={Housetype} color={"white"} backgroundColor={"var(--app-blue)"}/>                        
                <Chip text={commerce} color={"black"} backgroundColor={"white"}/>
            </div>
            <div className='overlaying-second' >
                <div>
                    {name}   
                </div>
                <div style={{display:"flex",gap:'10px'}}>
                    <button className='overlay-button'>
                        <FavoriteBorderOutlined></FavoriteBorderOutlined>
                    </button>
                    <button className='overlay-button' >
                        <Share></Share>
                    </button>
                </div>
            </div>
             <div className='overlaying-third'>
                <LocationOnOutlined style={{fontSize:'40px',color:'var(--app-blue)'}}></LocationOnOutlined>
                {location}
                </div>   
            
        </div>
    </div>
    );
}
export default PhotoSection