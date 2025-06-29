import { getDetails } from "./requests";

const EndPoints={
    Auth:{
        Login:'auth/login',
        Register:'user/register',
        Verify:'user/verify',
        Resend:'user/resend',
        reset:'auth/reset'
    },
    User:{
        Me:'auth/me',
        ChangeInfo:'user/',
        UploadImg:'user/upload-image',
        getImg:'user/images/',
        getOwnerInfo:'user/pro',
    },
    Agency:{
        getAgency:'user/agency',
    },
    Properties:{
     create:'property',
     getDetails:'property/',
     uploadPhotos:'property/upload-multiple-img',
     getAll:'property/all',
     getMine:'property/my', 
     getTop:'property/top',
  
    },
    Favoirtes:{
        getAll:'favorite',
        isFavorite:'favorite/isFavorite',
        setFavorite:'favorite',
        vote:'votes'
    },
    Plans:{
        getAll:'plans',
        createPlan:'webhook'
    },
    Admin:{
        getAllPropertiesSuperAdmin:'propertyA',
       getAllProperties:'propertyA/pending' ,
       getAdmins:'userA/getAdmins',
       getLogs:'/audit',
       getStatistics:'/analytics',
       addAdmin:'auth/addAdmin',
       getAdminDetails:'userA',
       deleteAdmin:'userA',
       acceptProperty:'/propertyA/acc',
       rejectProperty:'/propertyA/rej',
    }
    
    
}
export default EndPoints;