import "./alt_serviceSection.css"
// import Card from "../Card";
// import Chip from "../../../../components/ward/chips";
import Custom_Chip from "../../../Profile/components/Chips/chip";
import { useState } from "react";
function AltServiceSection() {
    const [chipVal, setChipVal] = useState(0);
    return (
        <div className="Main sec-con-center">
            <div className="title sec-title-cen">
                <h4>
                Services
                </h4>
            </div>
            <div className="card-holder">
                <div className="service-pic" style={{ backgroundImage: chipVal == 0 ? 'url("public/assets/images/man.svg")' : 'url("public/assets/images/agent.svg")', transition: 'background-image 0.5s ease-in' }} />
                <div className="service-righ-section">
                    <div className="what-we-do ">What We do ?</div>
                    <div className="chip-row">
                        <Custom_Chip title={"For Landlords"} val={chipVal} index={0} Click={() => setChipVal(0)} />
                        <Custom_Chip title={"For Renters"} index={1} val={chipVal} Click={() => setChipVal(1)} />
                    </div>
                    <div className="big-text">{chipVal == 0 ? "Streamline Your Rental Management" : "We Simplify Your Rental Home Search"}</div>

                    <div className="small-text">{chipVal == 0 ? "List and manage your properties effortlessly with our platform. We connect you directly with verified tenants while eliminating unnecessary costs and paperwork." : "Experience hassle-free rental home searching with our platform. We simplify the process by linking you directly to legit property managers by cutting out the middleman. "}</div>
                </div>
            </div>

        </div>
    );
}
// <Card image="assets/images/man.svg" name="For LandLords :" desc= button="Check out"/>
// <Card image="assets/images/agent.svg" name="For Renters :" desc="Find the right agent to guide you through every step with expertise and care." button="Find one"/>

export default AltServiceSection