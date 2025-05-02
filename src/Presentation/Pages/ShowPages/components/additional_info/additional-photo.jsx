import './additional-photo.css'
function AdditionalPhoto({onClick}){
    return(
        <img onClick={onClick} src='https://picsum.photos/200/300'></img>
    );
}
export default AdditionalPhoto