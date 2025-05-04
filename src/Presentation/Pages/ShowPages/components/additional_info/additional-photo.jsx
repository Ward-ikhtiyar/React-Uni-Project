import './additional-photo.css'
function AdditionalPhoto({onClick}){
    return(
        <img id='temporary' onClick={onClick} src='https://picsum.photos/200/300'></img>
    );
}
export default AdditionalPhoto