import './adSection.css'
import AppBar from './appBar';
function AdSection(){
    
    return(
        <div className="Main-div">
            <AppBar isHome={true} />
            <div className='grid'>
                 <div className='button-section' >
                <div className='slogan'>Homes.Lands<br></br>Apartments.</div>
                <button className='checkout-button'>Check out</button>
            </div>
            <div className='alt-logo'  ><a href='https://google.com'>SpeedOrder</a></div>
            </div>
           
            
        </div>
        
    );
}
export default AdSection;