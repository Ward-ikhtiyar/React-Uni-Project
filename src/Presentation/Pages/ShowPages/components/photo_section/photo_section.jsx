import './photo_section.css'
import { CameraAltOutlined } from '@mui/icons-material';
import {  FavoriteBorderOutlined, LocationOnOutlined, Share } from '@mui/icons-material';
import AdditionalPhoto from '../additional_info/additional-photo';
import Chip from '../../../../components/ward/chips';
import { useState } from 'react';
function PhotoSection({name,location,photos,isFavorite,Housetype,commerce}){
    const[pickedImage,setPickedImage]=useState(0);
    const[open,setisOpen]=useState(false);
    return(
        <div style={{backgroundImage:`url(${photos[pickedImage]})`}} className='photos-section'>
        <div className='additional-photos'>
            <AdditionalPhoto src={photos[0]} onClick={()=>{
                setPickedImage(0);
            }}/>
            <AdditionalPhoto src={photos[1]} onClick={()=>{
                setPickedImage(1);
            }}/>
            <div className='more-photos' onClick={()=>{
                console.log('yessirskiiii');
                setisOpen(true)}}>
              <CameraAltOutlined />
              <div >More</div>  
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