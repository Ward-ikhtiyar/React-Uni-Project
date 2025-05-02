import "./card.css"
function Card({desc,name,image}){
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
            <p className="name">{name} </p>
            <p className="details">{desc}</p>
            <button>check it out</button>
            
        </div>
    );
}
export default Card