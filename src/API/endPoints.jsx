import { Upgrade } from "@mui/icons-material";
import { getDetails } from "./requests";

const EndPoints={
    Auth:{
        Login:'auth/login',
        Register:'users/register',
        Verify:'users/verify',
        Resend:'users/resend',
        reset:'auth/reset',
        resetPass:'auth/reset_pass'
    },
    User:{
        Me:'auth/me',
        ChangeInfo:'users/',
        UploadImg:'users-media/profile-image',
        getImg:'users-media/images/',
        getOwnerInfo:'users/agency',
        upgradeToAgency:'users-media/upgrade/2/22.3/23.5'

    },
    Agent:{
        getAgent:'users/agency',
        getMyAgentProperties:'properties-on/my',
        acceptAgentProperty:'properties-ag/acc',
        rejectAgentProperty:'properties-ag/rej',
        getAgentPendingProperties:'properties-ag/pending',
        getOwnerInfo:'user/pro',
        report:'/reports',
        
    },
    Properties:{
     create:'properties-on',
     getDetails:'properties/',
     uploadPhotos:'properties-media/upload-multiple-img/',
     getAll:'properties/all',
     getMine:'properties-on/my', 
     getTop:'properties/top',
     agentUpdateProperty:'properties-ag',
  
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
       getAllPropertiesSuperAdmin:'properties-ad',
       getAllProperties:'properties-ad' ,
       getAdmins:'users/getAdmins',
       hideProperty:'properties-ad',
       getUsers:'/users/getUsers',
       addNewPlan:'/plans',
       getLogs:'/audit',
       getStatistics:'/analytics',
       addAdmin:'auth/addAdmin',
       getAdminDetails:'users/getAdminById',
       getuserDetails:'users',
       deleteAdmin:'auth/deleteAdmin',
       acceptProperty:'/propertyA/acc',
       rejectProperty:'/properties-ad',
       getReports:'/reports',
       ban:'/banned',
       adminLogs:'/audit'
    }
    
    
}
export default EndPoints;