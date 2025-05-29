import AppBar from '../components/appBar';
import "./HomePage.css";
import AdSection from "../components/adSections";
import ServiceSection from "../components/serviceSection";
import openDialogcontext from '../components/appBar.jsx'
import { useContext, useEffect, useRef } from 'react';
import {animate, motion} from "framer-motion";
import { useInView } from 'framer-motion';
function HomePage() {
    const ref =useRef(null);
     const  inView  = useInView(ref,{once:true,   });
    const openDialog = useContext(openDialogcontext);
    useEffect(() => { }, [openDialog]);
    return (
        <div className="HomePage" >
                
            <AdSection  />
            
            <motion.div ref={ref} style={{width:"100%"}} initial={{opacity:0,paddingTop:'150px',scale:'80%'}} whileInView={{opacity:1, paddingTop:'0px', scale:'100%' }} transition={{scale:{duration:1},marginTop:{duration:1},opacity:{duration:2}}}>
            <ServiceSection />
</motion.div>
        </div>
    );
}
export default HomePage