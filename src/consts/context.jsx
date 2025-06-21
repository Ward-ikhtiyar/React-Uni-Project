import { createContext, useContext, useState } from 'react';

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [msg,setMsg ] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [commerce, setCommerce] = useState('');
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [area, setArea] = useState(0);
  const [floors, setFloors] = useState(0);
  const [flooring, setFlooring] = useState('');
  const [heating, setHeating] = useState('');
  const [garage, setGarage] = useState('');    
  const [garden, setGarden] = useState('');    
  const[photos,setPhotos]=useState([]);  
  return (
    <PropertyContext.Provider
      value={{
        isSuccess, setIsSuccess,
        msg,setMsg,
        clicked, setClicked,
        isError, setIsError,
        title, setTitle,
        price, setPrice,
        location, setLocation,
        description, setDescription,
        type, setType,
        commerce, setCommerce,
        bedrooms, setBedrooms,
        bathrooms, setBathrooms,
        area, setArea,
        floors, setFloors,
        flooring, setFlooring,
        heating, setHeating,
        garage, setGarage,        
        garden, setGarden,       
        photos,setPhotos 
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => useContext(PropertyContext);
