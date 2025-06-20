import './info_tab.css'

function InfoTab({type,title,setVal,val}){
      
  return(
      <div className="addInfo-tab" >
        <p className='addInfo-title'> {title} </p>                                        
  <input  value={val} id='addInfo-input' onChange={(e)=>setVal(e.target.value)} className="inputBox" type={type} style={{marginBottom:'10px', borderRadius:'8px', height:'40px'}} />
                                        </div>        
    );
}
export default InfoTab