import './additional-photo.css'
function AdditionalPhoto({onClick,src,style}){
    
    const url=`http://localhost:3000/property/images/${src}`
    console.log(`picture linke is ${url}`);
    return(
        <img onError={(e)=>{e.target.src='public/assets/images/propertyPlaceholder.png'}} src={url} id='temporary' onClick={onClick} style={{objectFit:'cover', objectPosition:'center',}} crossOrigin='anonymous'/>
    );
}
export default AdditionalPhoto