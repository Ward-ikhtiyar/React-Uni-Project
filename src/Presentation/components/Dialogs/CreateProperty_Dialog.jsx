import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import './Auth_dialog.css';
import { BedOutlined,ShowerOutlined ,AreaChartOutlined } from "@mui/icons-material";
import SmallTextField from "../ward/small_textField";
function CreatePropertyDialog({open,onClose}){
    const handleClose=(event,reason)=>{
        if(reason==="backdropClick"){
            onClose();
        }
    };
    return(
        <Dialog   PaperProps={{
    sx: { backgroundColor: 'var(--app-background)' },
  }} open={open} onClose={handleClose} maxWidth={"xl"}>
            <DialogTitle >
                <div className="Main-title" style={{borderBottom:'1px solid black'}}>Create new Property</div>
                </DialogTitle>
            <DialogActions>
<div style={{display:'flex', flexDirection:'row' ,width:'60vw' }}>
                    <div className="dialog-body" style={{width:'50%', height:'70vh', display:'flex', flexDirection:'column', justifyContent:'start', alignItems:'start', borderRight:'1px solid', }}>
        <div style={{fontSize:'30px'}}>Main info</div>
        <div style={{ width:'90%', height:'30%', display:'flex', flexDirection:'row',justifyContent:'space-around'}}>
          
             
        </div>  
        <div className="editProfileTab">
            
                
                                    <div className="editProfileTab-content" style={{width:'28.5vw',justifyContent:'start'}}>
                                        title : 
                                        <div className="user-info">
                                            <input type="text" style={{marginBottom:'10px', borderRadius:'8px',border:'2px solid grey', height:'25px'}} />
                                        </div>
                                        </div>
                                        
                                </div>
                                
                                <div className="editProfileTab">
                                    <div className="editProfileTab-content" style={{width:'28.5vw',justifyContent:'start'}}>
                                        Price : 
                                        <div className="user-info">
                                            <input type="text" style={{marginBottom:'10px', borderRadius:'8px',border:'2px solid grey', height:'25px'}} />
                                        </div>
                                        </div>
                                        
                                </div>
                                 <div className="editProfileTab">
                                    <div className="editProfileTab-content" style={{width:'28.5vw',justifyContent:'start',}}>
                                        For : 
                                        <div className="user-info" style={{color:'black', display:'flex', flexDirection:'row', gap:'10vw'}}>
                                            <label htmlFor="">
                                                <input type="radio"  style={{ accentColor:'var(--app-blue)',border:'2px solid grey', height:'25px' ,marginLeft:'20px'}} /> Sale
                                            </label>
                                            
                                             <label htmlFor="">
                                                <input type="radio"  style={{ accentColor:'var(--app-blue)',border:'2px solid grey', height:'25px' }} /> Rent
                                            </label>
                                            
                                        </div>
                                        </div>
                                        
                                </div>
                                 <div className="editProfileTab">
                                    <div className="editProfileTab-content" style={{width:'28.5vw',justifyContent:'start',}}>
                                        Type : 
                                        <div className="user-info" style={{color:'black', display:'flex', flexDirection:'row', gap:'6.5vw'}}>
                                            <label htmlFor="">
                                                <input type="radio"  style={{ accentColor:'var(--app-blue)',border:'2px solid grey', height:'25px' ,marginLeft:'20px'}} /> Apartment
                                            </label>
                                            
                                             <label htmlFor="">
                                                <input type="radio"  style={{ accentColor:'var(--app-blue)',border:'2px solid grey', height:'25px' }} /> House
                                            </label>
                                            
                                        </div>
                                        </div>
                                        
                                </div>
    </div>
                  <div className="dialog-body" style={{width:'50%',height:'70vh', display:'flex', flexDirection:'column', justifyContent:'start', alignItems:'start', borderRight:'1px solid'}}>
    <div style={{fontSize:'30px'}}>Additional info</div>
        <div style={{ width:'90%', height:'30%', display:'flex', flexDirection:'row',justifyContent:'space-around'}}>
            <SmallTextField isArea={false} Icon={BedOutlined}/>
            <SmallTextField isArea={false} Icon={ShowerOutlined}/>
            <SmallTextField isArea={true} Icon={AreaChartOutlined}/>
             
        </div>  
        <div className="editProfileTab">
            
                
                                    <div className="editProfileTab-content" style={{width:'28.5vw',justifyContent:'start'}}>
                                        title : 
                                        <div className="user-info">
                                            <input type="text" style={{marginBottom:'10px', borderRadius:'8px',border:'2px solid grey', height:'25px'}} />
                                        </div>
                                        </div>
                                        
                                </div>
                                
                                <div className="editProfileTab">
                                    <div className="editProfileTab-content" style={{width:'28.5vw',justifyContent:'start'}}>
                                        Price : 
                                        <div className="user-info">
                                            <input type="text" style={{marginBottom:'10px', borderRadius:'8px',border:'2px solid grey', height:'25px'}} />
                                        </div>
                                        </div>
                                        
                                </div>
                                 <div className="editProfileTab">
                                    <div className="editProfileTab-content" style={{width:'28.5vw',justifyContent:'start',}}>
                                        For : 
                                        <div className="user-info" style={{color:'black', display:'flex', flexDirection:'row', gap:'10vw'}}>
                                            <label htmlFor="">
                                                <input type="radio"  style={{ accentColor:'var(--app-blue)',border:'2px solid grey', height:'25px' ,marginLeft:'20px'}} /> Sale
                                            </label>
                                            
                                             <label htmlFor="">
                                                <input type="radio"  style={{ accentColor:'var(--app-blue)',border:'2px solid grey', height:'25px' }} /> Rent
                                            </label>
                                            
                                        </div>
                                        </div>
                                        
                                </div>
                                 <div className="editProfileTab">
                                    <div className="editProfileTab-content" style={{width:'28.5vw',justifyContent:'start',}}>
                                        Type : 
                                        <div className="user-info" style={{color:'black', display:'flex', flexDirection:'row', gap:'6.5vw'}}>
                                            <label htmlFor="">
                                                <input type="radio"  style={{ accentColor:'var(--app-blue)',border:'2px solid grey', height:'25px' ,marginLeft:'20px'}} /> Apartment
                                            </label>
                                            
                                             <label htmlFor="">
                                                <input type="radio"  style={{ accentColor:'var(--app-blue)',border:'2px solid grey', height:'25px' }} /> House
                                            </label>
                                            
                                        </div>
                                        </div>
                                        
                                </div>
    </div>
    
</div>

            </DialogActions>
        </Dialog>
    );
}
export default CreatePropertyDialog