import AppBar from '../components/appBar';
import "./HomePage.css";
import AdSection from "../components/adSections";
import ServiceSection from "..//components/serviceSection";
import openDialogcontext from '../components/appBar.jsx'
import { useContext, useEffect } from 'react';
function HomePage(){
    const openDialog=useContext(openDialogcontext);
    useEffect(()=>{},[openDialog]);
    return(
        <div className="HomePage" > 
        <AppBar/>
        <AdSection/>
        <ServiceSection/>
        
         </div>
    );
}
export default  HomePage