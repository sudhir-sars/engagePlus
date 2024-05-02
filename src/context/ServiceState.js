import { json } from "react-router-dom";
import ServiceContext from "./serviceContext";
import { useState } from "react";

const ServiceState = (props) => {
  const [service, setservice] = useState();
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  
  
  return (
    <ServiceContext.Provider
      value={{ service,setservice,username, setusername,email,setemail }}
    >
      {props.children}
    </ServiceContext.Provider>
  );
};

export default ServiceState;