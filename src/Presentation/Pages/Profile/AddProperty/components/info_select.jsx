import './info_tab.css'

function InfoSelect({title,options,gap,val,setVal}){
    return(
      <div className="addInfo-tab" style={{flexDirection:'row', alignItems:'center',gap:gap ?? '20px'}} >
        <p className='addInfo-title'> {title} </p>      
        <select value={val} onChange={(e)=>setVal(e.target.value)} className='Info-select' >
            {options.map((element,index)=><option key={index} value={element}>{element}</option>)}
            </select>                                  
                                        </div>
                                        
                                
    );
}
export default InfoSelect