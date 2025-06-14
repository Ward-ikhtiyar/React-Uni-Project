const EndPoints={
    Auth:{
        Login:'auth/login',
        Register:'user/register',
        Verify:'user/verify',
        Resend:'user/resend',
    },
    User:{
        Me:'auth/me',
        ChangeInfo:'user/',
        UploadImg:'user/upload-image',
        getImg:'user/images/'
    },
    Properties:{
     create:'property',
     getDetails:'property/',
     uploadPhotos:'property/upload-multiple-img',
     getAll:'property/all',
     getMine:'property/my', 
  
    },
    Favoirtes:{
        getAll:'favorite',
        isFavorite:'favorite/isFavorite',
        setFavorite:'favorite'
    },
    Plans:{
        getAll:'plans',
        createPlan:'webhook'
    },
    Admin:{
       getAllProperties:'propertyA' 
    }
    
    
}
export default EndPoints;