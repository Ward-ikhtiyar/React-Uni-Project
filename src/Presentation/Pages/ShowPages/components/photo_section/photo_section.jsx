import './photo_section.css'
import { CameraAltOutlined, Delete, Favorite } from '@mui/icons-material';
import {  FavoriteBorderOutlined, LocationOnOutlined, Share,ArrowUpward,ArrowDownward } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';

import AdditionalPhoto from '../additional_info/additional-photo';
import Chip from '../../../../components/ward/chips';
import { useState } from 'react';
import { div } from 'framer-motion/client';
import { setFavorite, } from '../../../../../API/requests';
import { upVote,downVote } from '../../../../../API/other_requests';
function PhotoSection({name,location,photos,isFavorite,Housetype,commerce,setFavorite,voteScore,id}){
    console.log(photos);
    let morePhotos=[];
    const[pickedImage,setPickedImage]=useState(0);
    const[open,setisOpen]=useState(true);
    const[vote,setVote]=useState(voteScore);
    if(photos!=null){
        console.log("wardsdddddddddddddddd");
         morePhotos = [...photos] ;
    morePhotos.shift();
    morePhotos.shift();
}

    
    
  
    
    return(
        <div   className='photos-section'>
           {
            photos!=null?<img src={`http://localhost:3000/property/images/${photos[pickedImage]}`} className='photos-section' crossOrigin='anonymous'/>:<img src='public/assets/images/propertyPlaceholder.png' className='photos-section' />
           } 
        {photos!=null?<div className='additional-photos'>
            
            <AdditionalPhoto src={photos[0]} onClick={()=>{
                setPickedImage(0);
            }}/>   
            
                <AdditionalPhoto src={photos[1]} onClick={()=>{
                setPickedImage(1);
            }}/>
             
            <div className='more-photos' onClick={()=>{
                console.log('yessirskiiii');
                setisOpen(!open)}}>
              {open?<CameraAltOutlined />:<CloseIcon sx={{scale:'150%', color:'var(--app-blue)'}}/>}
              <div >{open?"More":""}</div>  
            </div>
        </div>:<div></div>}

        {open?<div className='overlaying-info'>
            <div className='overlaying-first' >
                <Chip text={Housetype} color={"white"} backgroundColor={"var(--app-blue)"}/>                        
                <Chip text={commerce} color={"black"} backgroundColor={"white"}/>
            </div>
            <div className='overlaying-second' >
                <div>
                    {name}   
                </div>
                <div style={{display:"flex",gap:'10px',position:'absolute',zIndex:'3', right:'0',marginRight:'7vw' }}>
                    <button className='overlay-button' onClick={()=>{
                        setFavorite()}}>
                        {isFavorite?<Favorite className='favorite-button' sx={{scale:'180%', color:'var(--app-blue)'}}/>:<FavoriteBorderOutlined className='favorite-button' sx={{scale:'180%', color:'white'}}/>}
                        </button>
                        <div style={{width:'20px'}}></div>
                        <button className='overlay-button' onClick={()=>{
                            upVote(id).then((data)=>{
                                setVote(data);
                            })}}>
                            <ArrowUpward className='favorite-button' sx={{scale:'180%', color:'white'}}/>
                            </button>
                            {vote}
                            <button className='overlay-button' onClick={()=>{
                                downVote(id).then((data)=>{
                                    setVote(data);
                                })}}>
                                <ArrowDownward className='favorite-button-down' sx={{scale:'180%', color:'white'}}/>
                            </button>
                </div>
            </div>
             <div className='overlaying-third'>
                <LocationOnOutlined style={{fontSize:'40px',color:'var(--app-blue)'}}></LocationOnOutlined>
               <div style={{fontFamily:'Tajawal', marginTop:"5px"}}>{location}</div> 
                </div>   
            
        </div>:<div className='overlaying-pics'>
            
               {morePhotos.map((photo, index) => {
  console.log(`http://localhost:3000/property/images/${photo}`);
  return (
    <AdditionalPhoto
      key={photo}
      onClick={() => setPickedImage(index + 2)}
      src={`${photo}`}
    />
  );
})}

            </div>}
    </div>
    );
}
export default PhotoSection