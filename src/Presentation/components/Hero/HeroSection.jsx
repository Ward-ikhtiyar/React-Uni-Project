import { useNavigate } from 'react-router-dom';
import './HeroSection.css'
function HeroSection() {

    let navigate = useNavigate();

    return (
        <div className="Main-div">
            <AppBar isHome={true} />
            <div className='grid'>
                <div className='button-section' >

                    <div className='CTA' style={{ color: 'white' }}>Homes.Lands<br></br>Apartments.</div>
                    <button className='checkout-button' onClick={() => {
                        navigate('/Properties')
                    }}>Check out</button>

                </div>
                <div className='alt-logo'  ><a href='http://localhost:5173.com'>EasyRent</a></div>
            </div>


        </div>

    );
}
export default HeroSection;