import { useNavigate } from 'react-router-dom';
import './adSection.css'
import AppBar from './appBar';
function AdSection() {

    let navigate = useNavigate();

    return (
        <div className="Main-div">
            <AppBar isHome={true} />
            <div className='grid'>
                 <div className='button-section' >
                <div className='CTA'>Homes.Lands<br></br>Apartments.</div>
                <button onClick={()=>{
                    navigate('/properties')
                }} className='checkout-button'>Check out</button>
            </div>


        </div>

    );
}
export default AdSection;