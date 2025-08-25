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
    Agent:{
        getAgent:'users/agency',
        getMyAgentProperties:'propertyG/my',
        acceptAgentProperty:'propertyG/acc',
        rejectAgentProperty:'propertyG/rej',
        getAgentPendingProperties:'propertyG/pending',
        getOwnerInfo:'user/pro',
        report:'/reports'
    },
    Properties:{
     create:'propertyN',
     getDetails:'view/',
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
       getAdmins:'users/getAdmins',
       getUsers:'/users/getUsers',
       addNewPlan:'/plans',
       getLogs:'/audit',
       getStatistics:'/analytics',
       addAdmin:'auth/addAdmin',
       getAdminDetails:'users/getAdminById',
       getuserDetails:'users',
       deleteAdmin:'auth/deleteAdmin',
       acceptProperty:'/propertyA/acc',
       rejectProperty:'/propertyA/rej',
       getReports:'/reports',
       ban:'/banned',
       adminLogs:'/audit'
    }
    
    
}
export default EndPoints;