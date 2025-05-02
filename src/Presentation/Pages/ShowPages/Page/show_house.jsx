import AppBar from '../../Home/components/appBar';
import './show_house.css'
import { BedOutlined, FavoriteBorderOutlined, LocationOnOutlined, Share } from '@mui/icons-material';
import { ShowerOutlined } from '@mui/icons-material';
import { AreaChartOutlined } from '@mui/icons-material';
import PhotoSection from '../components/photo_section/photo_section';
import InfoComp from '../components/Primary_info/infoComp';
import InfoTab from '../components/Primary_info/infoTab';
function ShowHouse(){
    let x=[
        "https://picsum.photos/200/300"," https://plus.unsplash.com/premium_photo-1723489682171-763c15cd79e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    ];
    return(
        <div className='HomePage' >
            <PhotoSection name={"Qudsaya Mansion"} location={"Qudsaya,Beer Factory"} commerce={"For Sale"} Housetype={"Flat"} photos={x}/>
            <div  className='details-section'>
                <div className='overview'>Overview</div>
                <div className='initial-info'>                   
                    <InfoComp title={"Bedrooms"} Icon={BedOutlined} info={"2"} />
                    <InfoComp title={"Bathrooms"} Icon={ShowerOutlined} info={"1"} />
                    <InfoComp title={"Area"} Icon={AreaChartOutlined} info={"180 m^2"} />
                </div>
                <p className='header'>Description</p>
                <div className='description'> Welcome to your dream home! This stunning 4-bedroom, 3-bathroom residence is thoughtfully designed to offer an exceptional living experience. Located in a prestigious and highly sought-after neighborhood, this home boasts spacious interiors, high-end finishes, and modern amenities that cater to every need. Whether you're looking for a peaceful retreat or a place to entertain, this property delivers the best of both worlds.
</div>
                <p className='header'>Additional Details</p>
                <div className='info-tab' >
                     <InfoTab title={"Ward"} subtitle={"yezzir"}/>
                     <InfoTab title={"Ward"} subtitle={"yezzir"}/>
                     <InfoTab title={"Ward"} subtitle={"yezzir"}/>
                      </div>
                
            </div>
            
        </div>
    );
}
export default ShowHouse