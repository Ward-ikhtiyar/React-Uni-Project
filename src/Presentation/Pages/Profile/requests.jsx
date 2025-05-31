import { Chip } from '@mui/material';
import './requests.css'
import { Add,HouseOutlined } from '@mui/icons-material';
import Custom_Chip from './components/Chips/chip';
import { useState } from 'react';
import RequestCard from './components/request_card/request_card';
function RequestsPage(){
    const[chipVal,setChipVal]=useState(0);
return(
    <div className="profile-info" >
        <div className="requests-title">
            Requests
            <button className='colored-button'><Add /> Add new request</button>
        </div>
        <div className='chips-row'>
            <Custom_Chip Click={setChipVal} title={"All"}  index={0} val={chipVal}/>
            <Custom_Chip Click={setChipVal} title={"Pending"}  index={1} val={chipVal}/>            
            <Custom_Chip Click={setChipVal} title={"in-Progress"}  index={2} val={chipVal}/>
            <Custom_Chip Click={setChipVal} title={"Resolved"}  index={3} val={chipVal}/>
        </div>

        <div className='profile-body'>
            <RequestCard title={"Leaking Faucet in Kitchen"} sender={"me"} date={" May 29 2025"} location={"Qudsaya,Beer Factory "}/>
            
            
            
            <div className='request-card'>
                <div>Leaking Faucet in Kitchen</div>
                <div className='request-card-second'>May 29 2025 , maintenance</div>
                <div className='request-card-third'> Made By: me</div>
                <div className='request-card-forth'>
                    <HouseOutlined/>
                    Qudsaya,Beer Factory 
                </div>
                <div className='request-card-third'>
                    <div></div>
                    <button className='border-button'>View Details</button>
                </div>
            </div>
            <div className='request-card'>
                <div>Leaking Faucet in Kitchen</div>
                <div className='request-card-second'>May 29 2025 , maintenance</div>
                <div className='request-card-third'> Made By: me</div>
                <div className='request-card-forth'>
                    <HouseOutlined/>
                    Qudsaya,Beer Factory 
                </div>
                <div className='request-card-third'>
                    <div></div>
                    <button className='border-button'>View Details</button>
                </div>
            </div>
            <div className='request-card'>
                <div>Leaking Faucet in Kitchen</div>
                <div className='request-card-second'>May 29 2025 , maintenance</div>
                <div className='request-card-third'> Made By: me</div>
                <div className='request-card-forth'>
                    <HouseOutlined/>
                    Qudsaya,Beer Factory 
                </div>
                <div className='request-card-third'>
                    <div></div>
                    <button className='border-button'>View Details</button>
                </div>
            </div>
            <div className='request-card'>
                <div>Leaking Faucet in Kitchen</div>
                <div className='request-card-second'>May 29 2025 , maintenance</div>
                <div className='request-card-third'> Made By: me</div>
                <div className='request-card-forth'>
                    <HouseOutlined/>
                    Qudsaya,Beer Factory 
                </div>
                <div className='request-card-third'>
                    <div></div>
                    <button className='border-button'>View Details</button>
                </div>
            </div>
            <div className='request-card'>
                <div>Leaking Faucet in Kitchen</div>
                <div className='request-card-second'>May 29 2025 , maintenance</div>
                <div className='request-card-third'> Made By: me</div>
                <div className='request-card-forth'>
                    <HouseOutlined/>
                    Qudsaya,Beer Factory 
                </div>
                <div className='request-card-third'>
                    <div></div>
                    <button className='border-button'>View Details</button>
                </div>
            </div>
            
            
            </div>
            
    </div>
);
}
export default RequestsPage