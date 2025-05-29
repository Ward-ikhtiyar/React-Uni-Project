import React from "react";
import Lottie from "lottie-react";
import animationData  from "./EeasyRent.json";

const EasyRent = () => {
  return <Lottie animationData={animationData} loop={true} />;
};

export default EasyRent;