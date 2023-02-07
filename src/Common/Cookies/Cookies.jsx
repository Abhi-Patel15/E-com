import Cookies from "universal-cookie";

const setToken = (token) => {
    const cookies = new Cookies();
    cookies.set("token", token);
  };

const getToken = (token) => {
    const cookies = new Cookies();
    return cookies.get("token",token);
  };
  
  const removeToken = (token) => {
      const cookies = new Cookies();
      return cookies.remove("token",token);
  }; 
  
  export {getToken,
     setToken,removeToken};