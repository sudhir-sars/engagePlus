import { json } from "react-router-dom";
import ServiceContext from "./serviceContext";
import { useState } from "react";

const ServiceState = (props) => {
  const [service, setservice] = useState();
  
  return (
    <ServiceContext.Provider
      value={{ service,setservice }}
    >
      {props.children}
    </ServiceContext.Provider>
  );
};

export default ServiceState;