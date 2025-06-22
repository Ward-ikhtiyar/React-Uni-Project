import { useNavigate } from 'react-router-dom';
import './adSection.css'
import AppBar from './appBar';
function AdSection(){
        const navigate=useNavigate();
    return(
        <div className="Main-div">
            <AppBar isHome={true} />
            <div className='grid'>
                 <div className='button-section' >
                <div className='CTA'>Homes.Lands<br></br>Apartments.</div>
                <button onClick={()=>{
                    navigate('/properties')
                }} className='checkout-button'>Check out</button>
            </div>
            <div className='alt-logo'  ><a href='http://localhost:5173.com'>EasyRent</a></div>
            </div>
           
            
        </div>
        
    );
}
export default AdSection;