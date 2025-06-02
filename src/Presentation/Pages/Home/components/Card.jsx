import "./card.css"
function Card({desc,name,image,button}){
    const photoStyle={
    width: "120px",
    height: "120px",
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat:"no-repeat"
    }
    return (
        <div id="card" className="card">

            <div style={photoStyle}  className="Card-pic"></div>
            <div className="text-info">
                <div className="name">{name} </div>
            <div className="details">{desc}</div>
            </div>
            
            
            
        </div>
    );
}
export default Card