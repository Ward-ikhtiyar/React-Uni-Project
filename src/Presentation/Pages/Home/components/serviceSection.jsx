import "./serviceSection.css"
import Card from "./Card";
function ServiceSection(){
    return(
        <div className="Main">
            <div className="title">Services</div>
            <div className="card-holder">
            <Card image="assets/images/buyHouse.svg" name="Buy & Rent Properties ." desc="Look through The Wide Selections of Properties Offered in our Website " button="Check out"/>
            <Card image="assets/images/houseForSale.svg" name="Offer Your Property ." desc="We Can Help You Sell or Rent Your Properties By Featuring it with Just A Few Steps" button="Become a seller"/>
            <Card image="assets/images/agent.svg" name="Find an agent ." desc="Find the right agent to guide you through every step with expertise and care." button="Find one"/>
            
            </div>
            
        </div>
    );
}
export default ServiceSection