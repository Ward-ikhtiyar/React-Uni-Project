import './Hero.css'
import SearchBar from '../SearchBar/SearchBar';
function Hero() {

    return (
        <div className="home-hero-section">
            <div className='home-hero-innercomps' >
                <h1 className="CTA">Get to know us better</h1>
                <SearchBar/>
                {/* <p>hello world</p> */}
                {/* <SearchBar/> */}
            </div>
        </div>

    );
}
export default Hero;