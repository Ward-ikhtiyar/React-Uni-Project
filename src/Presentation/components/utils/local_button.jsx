import { LanguageOutlined, LanguageRounded, TranslateOutlined } from "@mui/icons-material";
import '../../../utils/i18n';
import { useTranslation } from 'react-i18next';

function LocalButton(){
    const{t,i18n}=useTranslation();
    const handleChangeLang = () => {
      const newLang = i18n.language === 'ar' ? 'en' : 'ar';
      localStorage.setItem('lang',newLang)

      i18n.changeLanguage(newLang);
  document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
};
    return (
        
       <button  style={{paddingTop:'10px',backgroundColor:'var(--app-background)',border:'none',fontFamily:"Tajawal",color:'var(--app-blue)',fontWeight:'700'}} onClick={handleChangeLang}>
        <TranslateOutlined sx={{color:'var(--app-blue)'}}/>
        {i18n.language === 'ar' ? 'ع' : 'EN'}
        </button> 
    );
}
export default LocalButton;