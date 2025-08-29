import { getDetails } from "./requests";

const EndPoints = {
    Auth: {
        Login: 'auth/login',
        Register: 'user/register',
        Verify: 'user/verify',
        Resend: 'user/resend',
        reset: 'auth/reset'
    },
    User: {
        Me: 'auth/me',
        ChangeInfo: 'user/',
        UploadImg: 'users-media/profile-image',
        getImg: 'user/images/',
        getOwnerInfo: 'user/pro',
    },
    Agent: {
        getAgent: 'users/agency',
        getMyAgentProperties: 'properties-on/my',
        acceptAgentProperty: 'propertyG/acc',
        rejectAgentProperty: 'propertyG/rej',
        getAgentPendingProperties: 'propertyG/pending',
        getOwnerInfo: 'user/pro',
        report: '/reports'
    },
    Properties: {
        create: 'properties-on',
        getDetails: 'properties/',
        uploadPhotos: 'property/upload-multiple-img',
        getAll: 'properties/all',
        getMine: 'properties-on/my',
        getTop: 'properties/top',
        agentUpdateProperty: 'properties-ag',
        nearMe: 'properties/near',
        geo: 'properties/geo',

    },
    Favoirtes: {
        getAll: 'favorite',
        isFavorite: 'favorite/isFavorite',
        setFavorite: 'favorite',
        vote: 'votes'
    },
    Plans: {
        getAll: 'plans',
        createPlan: 'webhook'
    },
    Admin: {
        getAllPropertiesSuperAdmin: 'properties-ad',
        getAllProperties: 'properties-ad',
        getAdmins: 'users/getAdmins',
        getUsers: '/users/getUsers',
        addNewPlan: '/plans',
        getLogs: '/audit',
        getStatistics: '/analytics',
        addAdmin: 'auth/addAdmin',
        getAdminDetails: 'users/getAdminById',
        getuserDetails: 'users',
        deleteAdmin: 'auth/deleteAdmin',
        acceptProperty: '/propertyA/acc',
        rejectProperty: '/propertyA/rej',
        getReports: '/reports',
        ban: '/banned',
        adminLogs: '/audit'
    }


}
export default EndPoints;