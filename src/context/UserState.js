import { json } from "react-router-dom";
import UserContext from "./UserContext";
import { useState ,useEffect} from "react";

const UserState = (props) => {
  
  const [user, setUser] = useState(null);
  useEffect(() => {
    const localUser=JSON.parse(localStorage.getItem("user"));
    if(user && user.token && user.token){
      setUser(user);
    }
  }, []);
  
  return (
    <UserContext.Provider
      value={{user,setUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;