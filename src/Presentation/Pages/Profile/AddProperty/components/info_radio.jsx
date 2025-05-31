import { div } from 'framer-motion/client';
import './info_tab.css'
import { scale } from 'framer-motion';

function InfoRadio({title,option1,option2,Icon,val,setVal}){
    const handleClicked=(chosenVal)=>{
        setVal(chosenVal);
    }
    return(
    <div className="addInfo-tab" style={{flexDirection:'row',alignItems:'center',justifyContent:'space'}} >
        
            <p className='addInfo-title'> {Icon?
                <div className='radio-icon' >
                    <Icon sx={{scale:'140%'}} />
                </div>
                :title} </p>
        <div className='radio'>
            <input checked={val===option1} className='radio-button' onClick={()=>handleClicked(option1)} type="radio"  id="" />
            <label  htmlFor="">{option1}</label> 
        </div>
                <div className='radio'>
                    <input checked={val===option2}  className='radio-button' onClick={()=>handleClicked(option2)} value={option2} type="radio"  id="" />                                              
                    <label   htmlFor="">{option2}</label>
                </div>
            
        
          
    </div>
                                        
                                
    );
}
export default InfoRadio