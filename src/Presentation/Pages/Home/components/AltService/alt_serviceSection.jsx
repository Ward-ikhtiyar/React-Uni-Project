import "./alt_serviceSection.css"
import Card from "../Card";
import Chip from "../../../../components/ward/chips";
import Custom_Chip from "../../../Profile/components/Chips/chip";
import { useState } from "react";
import { useTranslation } from "react-i18next";
function AltServiceSection(){
    const {t}=useTranslation();
    const[chipVal,setChipVal]=useState(0);
    return(
        <div className="Main">
            <div className="title">
            {t('services')}
                    
            </div>
            <div className="card-holder">
            <div className="service-pic" style={{backgroundImage:chipVal==0?'url("public/assets/images/man.svg")':'url("public/assets/images/agent.svg")',transition:'background-image 0.5s ease-in'}} />
            <div className="service-righ-section">
                <div className="what-we-do ">{t('whatWeDo')}</div>
                <div className="chip-row">
                    <Custom_Chip title={t("agencies")} val={chipVal} index={0} Click={()=>setChipVal(0)}/>
                    <Custom_Chip title={t("buyers")} index={1} val={chipVal} Click={()=>setChipVal(1)}  />
                </div>
                <div className="big-text">{chipVal==0?t("streamlineProperty"):t("simplifyPropertySearch")}</div>

                <div className="small-text">{chipVal==0?t("manageProps"):t("hassleFreeRental")}</div>
            </div>
            </div>
            
        </div>
    );
}
            // <Card image="assets/images/man.svg" name="For LandLords :" desc= button="Check out"/>
            // <Card image="assets/images/agent.svg" name="For Renters :" desc="Find the right agent to guide you through every step with expertise and care." button="Find one"/>
            
export default AltServiceSection