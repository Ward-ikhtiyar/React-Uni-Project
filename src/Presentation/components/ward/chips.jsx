function Chip({text,color,backgroundColor}){
    const style={
        backgroundColor:`${backgroundColor}`,
        color:`${color}`,
        borderRadius:'15px',
        paddingLeft:'10px',
        paddingRight:'10px',
        display:"flex",
        justifyContent:'center',
        alignItems:'center'
    };
    return(<div style={style}>{text}</div>);
}
export default Chip