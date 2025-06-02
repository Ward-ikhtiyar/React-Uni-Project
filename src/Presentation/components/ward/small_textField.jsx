function SmallTextField({Icon,isArea,val,setVal}){
    return(    <div style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center',}}>
    <input value={val} onChange={(e)=>setVal(e.target.value)} style={{height:'15vh',fontSize:'50px',width:!isArea?"10vw":'10vw', backgroundColor:'var(--app-blue-opaque)',color:'var(--app-blue)', alignItems:'center',paddingLeft:'0px',scale:'60%',textAlign:'center'}} className="inputBox" type="text"  onInput={(e)=>console.log(e.target.value)} />
        <Icon sx={{scale:'150%',color:'var(--app-blue)'}}/>
</div>);
}
export default SmallTextField