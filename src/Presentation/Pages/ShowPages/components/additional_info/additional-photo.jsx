import './additional-photo.css'
function AdditionalPhoto({onClick,src}){
    return(
        <div id='temporary' onClick={onClick} style={{backgroundImage:`url(${src})`}}></div>
    );
}
export default AdditionalPhoto