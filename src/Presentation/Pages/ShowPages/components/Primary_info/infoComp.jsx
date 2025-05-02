import './infoComp.css'

function InfoComp({title,Icon,info}){
    return(
        <div className='initalInfo-widget'>
                                <div>{title}</div>
                                <div className='initalInfoWidget-body' >
                                    <Icon style={{fontSize:"40px"}}/>
                                    <div style={{color:"black"}}>{info}</div>
                                    </div>
                                </div>
    );
}
export default InfoComp