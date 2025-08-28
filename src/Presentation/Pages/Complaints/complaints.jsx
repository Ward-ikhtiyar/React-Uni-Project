import EasyRent from '../../components/Lottie/EasyRent';
import { ArrowBackIos, ArrowForward, ArrowForwardIos } from '@mui/icons-material';
import './complaints.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { postComplaint } from '../../../API/other_requests';
import { CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Issues } from '../../../consts/lists';
import MySnackbar from '../../components/snackBar/success_snack';
import ErrorSnackbar from '../../components/snackBar/erorr_snack';
function ComplaintsPage(){
    const [description,setDescription]=useState('');
    const [reason,setReason]=useState('');
    const [email,setEmail]=useState('');
    const [postLoading,setPostLoading]=useState(false);
    const[success,setSuccess]=useState(false);
    const[error,setError]=useState(false);
    async function handlePostComplain() {
        const complaint={
            title:reason,
            reason:'Other',
            description:description,
            myEmail:email,
        };
        
        try{
            setPostLoading(true);
       let data= await postComplaint(complaint);
            setPostLoading(false);
            setSuccess(true);
            clearVals();
        }
       catch(e){
        setError(true);
       }
        
    }
    const clearVals=()=>{
        setDescription("");
        setEmail("");
        setReason("");
    }
    const {t}=useTranslation();
    const navigate=useNavigate();
    let isArabic=localStorage.getItem('lang')=="ar";
    return(
        <div className="HomePage" style={{display:'flex',flexDirection:"row",position:'relative'}}>
            <div className="complaints-icons">
                <div style={{width:'100%',display:'flex',marginLeft:'70px',marginRight:'70px'}}>
                    <div onClick={()=>{navigate('/',{replace:true})}}>
                      { isArabic?<ArrowForwardIos  className='arrow-back-complaints' sx={{scale:'160%',position:'absolute',top:'0',marginTop:'15vh',color:'var(--app-blue)'}}/>: <ArrowBackIos  className='arrow-back-complaints' sx={{scale:'160%',position:'absolute',top:'0',marginTop:'15vh',color:'var(--app-blue)'}}/>}

                    </div>
                    <div style={{position:'absolute',top:'0',marginTop:'12.2vh',marginLeft:'50px',marginRight:'50px'}}>
                        <EasyRent onClick={()=>{
            navigate('/',{replace:true})
         }}/>
                    </div>
                </div>
                <div style={{display:'flex'}}>
                <img style={{width:'40%',marginLeft:'20px',marginRight:'20px',}} src="public/assets/images/feedBack.svg"/>
                    <div>
                        <div className='complaints-fields-header'>
                            <h1 id='complaints-title'>{t('weListen')}</h1>
                        </div>
                    
                    <h4 id='complaints-body' style={{}}>{t('shareFeedBack')}</h4>
                    </div>
            </div>
            </div>
            <div className="complaints-fields">
                <h1 id='complaints-fields-title'>{t('submitComplaint')}</h1>
                <div className='complaints-fields-header'>
                    {t('reason')}
                </div>
                
                <select
                        className="dropdown-complaints"
                        style={{ height: "40px",border:'2px solid var(--app-blue)' }}
                        onChange={(e) => setReason(e.target.value)}
                    >
                        {Issues.map((issue,index)=>
                        <option key={index} value={issue.name} >{localStorage.getItem('lang')=="en"? issue.name:issue.arName}</option>)}
                    </select>
                 
                <div className='complaints-fields-header'>
                    {t('emailAddress')}
                </div>
                <input value={email} onChange={(e)=>setEmail(e.target.value)}  className='complaints-inputBox' type='text' placeholder='EasyRent@gmail.com'></input>

                <div className='complaints-fields-header'>
                    {t('description')}
                </div>

                <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} style={{minHeight:'15vh'}}  className='complaints-inputBox' type='text' placeholder={t('describeIssue')}></textarea>
                <div style={{height:'40px'}}></div>
                <button style={{width:'60%',fontFamily:'Tajawal'}} className='login-button' onClick={()=>handlePostComplain()}>{postLoading===false? t("submit"):<CircularProgress sx={{color:'white',scale:'70%'}}></CircularProgress>} </button>
            </div>
          <MySnackbar open={success} handleClose={()=>setSuccess(false)} title={t('feedBackSentSuccess')}/>  
          <ErrorSnackbar open={error} handleClose={()=>setError(false)} title={t('errorMsg')}/>                
        </div>
    );
}
export default ComplaintsPage