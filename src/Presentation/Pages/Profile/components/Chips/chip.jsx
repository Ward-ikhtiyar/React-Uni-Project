import './chips.css'
function Custom_Chip({index,Click,val,title}){
    
    const styles = {
  selectedChip: {
    backgroundColor: "var(--app-blue-opaque)",
    color: "var(--app-blue)",
    paddingLeft: "10px",
    paddingRight: "10px",
    fontSize: "20px",
    borderRadius: "5px",
  },
  unselectedChip: {
    paddingLeft: "10px",
    paddingRight: "10px",
    fontSize: "20px",
    borderRadius: "5px",
  },

};

const handleOnClick=()=>{
Click(index);
}
    
    return(
        <div className="Chip" onClick={handleOnClick}  style={index==val?styles.selectedChip:styles.unselectedChip}>{title}</div>
    );
}
export default Custom_Chip;