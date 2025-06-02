
import { clipPath } from 'framer-motion/client';
import './infotab.css';
function InfoTab({title,subtitle,index}){
    let color=index%2==0?'var(--app-blue-opaque)':'white';
    let fontColor=index%2==0?'var(--app-blue)':'black';
    return(
        
        <div className='info-Tab' style={{backgroundColor:color,color:fontColor}} >
            <p>{`${title} :`}</p>
            <p style={{fontWeight:'300'}}>{subtitle}</p>
        </div>
       
        
        
        
    );
}
export default InfoTab