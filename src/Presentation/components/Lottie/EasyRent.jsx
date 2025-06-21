import React from "react";
import Lottie from "lottie-react";
import animationData  from "./EeasyRent.json";

const EasyRent = ({onClick}) => {
  return <Lottie animationData={animationData} loop={true} onClick={onClick} style={{cursor: 'pointer'}}/>;
};

export default EasyRent;