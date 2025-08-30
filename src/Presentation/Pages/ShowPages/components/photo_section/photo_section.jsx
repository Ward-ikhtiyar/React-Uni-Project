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
function PhotoSection({name,location,photos,isFavorite,price,Housetype,commerce,setFavorite,voteScore,id}){
    console.log(photos);
    let morePhotos=[];
    const[pickedImage,setPickedImage]=useState(0);
    const[open,setisOpen]=useState(true);
    const[vote,setVote]=useState(voteScore);
    const[isUpVoted,setIsUpvoted]=useState(null);
    if(photos!=null){
        console.log("wardsdddddddddddddddd");
         morePhotos = [...photos] ;
    morePhotos.shift();
    morePhotos.shift();
}

    
    
  
    
    return(
        <div   className='photos-section'>
           {
            photos!=null?<img onError={(e)=>{e.target.src='public/assets/images/propertyPlaceholder.png'}} src={`http://localhost:3000/property/images/${photos[pickedImage]}`} className='photos-section' crossOrigin='anonymous'/>:<img src='public/assets/images/propertyPlaceholder.png' className='photos-section' />
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
                <div className='overlaying-second-title'>
                    <div style={{fontSize:'35px'}}>
                    {name}
                    </div>
                    <div style={{
                    backgroundColor:`var(--app-blue)`,
                    color:`white`,
                    borderRadius:'15px',
                    paddingLeft:'10px',
                    paddingRight:'10px',
                    display:"flex",
                    justifyContent:'center',
                    alignItems:'center',
                    height:'35px',
                    minWidth:'8vw',
                    marginTop:'5px',
                    fontSize:'25px'
                    }}>
                    {price}&nbsp;{'SYP'} 
                    </div>

                </div>
                <div style={{display:"flex",gap:'10px',position:'absolute',zIndex:'3', right:'0',marginRight:'7vw' }}>
                    <button className='overlay-button' onClick={()=>{
                        setFavorite()}}>
                        {isFavorite?<Favorite className='favorite-button' sx={{scale:'180%', color:'var(--app-blue)'}}/>:<FavoriteBorderOutlined className='favorite-button' sx={{scale:'180%', color:isUpVoted?'var(--app-blue)':'white'}}/>}
                        </button>
                        <div style={{width:'20px'}}></div>
                        <button 
  className='overlay-button' 
  onClick={() => {
    upVote(id).then((data) => {
      if (data) {
        setVote(data.voteScore); // now we have the field
        setIsUpvoted(prev => prev === true ? null : true);
      }
    });
  }}
>
                            <ArrowUpward className='favorite-button' sx={{scale:'180%', color:isUpVoted!=null?isUpVoted==true?'var(--app-blue)':'white':'white'}}/>
                            </button>
                           <div style={{fontSize:'35px',color:'white'}}>{vote}</div>, 
                            <button className='overlay-button'  onClick={() => {
    downVote(id).then((data) => {
      if (data) {
        setVote(data.voteScore);
        setIsUpvoted(prev => prev === false ? null : false);
      }
    });
  }}>
                                <ArrowDownward className='favorite-button-down' sx={{scale:'180%', color:isUpVoted!=null?isUpVoted==false?'var(--app-red)':'white':'white'}}/>
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