
import { Fab } from "@mui/material";
import REMap from "../../Search-Proporties/components/RE-Map/RE-Map";
import InfoSection from "./info_section";
import { useState } from "react";
import './addProperty.css'
import DetailsSection from "./details_section";
import { PropertyProvider } from "../../../../consts/context";
function AddPropertyPage({ open, setOpen }) {
    document.body.style.overflow = 'hidden';
    const [clicked, setClicked] = useState(false);


    return (
        <PropertyProvider>
            <div style={{ display: 'flex', flexDirection: 'row', minHeight: '100vh', alignItems: 'start', overflowY: 'hidden' }}>
                <Fab onClick={() => { setClicked(!clicked) }} sx={{
                    '&:hover': {
                        backgroundColor: 'white', color: 'var(--app-blue)'
                    }, color: 'white', backgroundColor: 'var(--app-blue)', position: 'fixed', bottom: '0', right: '0', borderRadius: '5px', marginRight: '40px', marginBottom: '30px', width: '120px', fontFamily: 'Lexend', height: '40px'
                }}>{clicked ? "Back" : "Next"}</Fab>
                <REMap isAdd={true} />
                {!clicked ? <InfoSection setOpen={setOpen} clicked={clicked} /> : <DetailsSection />}

            </div>
        </PropertyProvider>

    );
}
export default AddPropertyPage;