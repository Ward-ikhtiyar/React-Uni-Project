import { HouseOutlined } from '@mui/icons-material';
import './request_card.css'
function RequestCard({title,date,sender,location}){
    return(
        <div className='request-card'>
                        <div>{title}</div>
                        <div className='request-card-second'>{date} , maintenance</div>
                        <div className='request-card-third'> Made By: {sender}</div>
                        <div className='request-card-forth'>
                            <HouseOutlined/>
                            {location} 
                        </div>
                        <div className='request-card-third'>
                            <div></div>
                            <button className='border-button'>View Details</button>
                        </div>
                    </div>
    );
}
export default RequestCard