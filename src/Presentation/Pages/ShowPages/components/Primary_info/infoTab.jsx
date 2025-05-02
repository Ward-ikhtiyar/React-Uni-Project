
import './infotab.css';
function InfoTab({title,subtitle}){
    return(
        
        <div className='info-Tab' >
            <p>{`${title} :`}</p>
            <p style={{color:'rgb(88, 88, 88)',fontWeight:'300'}}>{subtitle}</p>
        </div>
       
        
        
        
    );
}
export default InfoTab