import { DELETE_CATEGORY,
        GET_CARD_COUNOFDATA, 
        GET_GRAPH_GRAPHOFDATA, 
        GET_LOGIN,
         GET_REGISTRATIONDATA,
         GET_TABAL_LISTOFORDER, 
        POST_CATEGORY_LIST,  
        POST_LISTOFCATEGORY,  
        POST_VIEWPRODUCT,  
        PUT_EDIT_CATEGORY } from "../api/apiEndpoints";
import { API } from "../api/generalService";
import { getToken } from "../Common/Cookies/Cookies";

const url = "http://mahaswari.com:1337";
const urls = "http://localhost:3500";
const  token= getToken();

export const getLoginServices = async (params) => {
    try {
      const response = await API.post(`${url}/${GET_LOGIN}`,params, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
      }
      });
      return response.data;
    } catch (e) {
      return e;
    }
  };

  //dashbord
 export const getCounOfTabelServices = async () => {
    try {
      const response = await API.get(`${url}/${GET_CARD_COUNOFDATA}`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
      }
      });
      return response.data;
    } catch (e) {
      return e;
    }
  };
  export const getGraphOfTabelServices = async () => {
    try {
      const response = await API.get(`${url}/${GET_GRAPH_GRAPHOFDATA}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
      }
      });
      return response.data;
    } catch (e) {
      return e;
    }
  };
  export const getRegistraionOfTabelServices = async () => {
    try {
      const response = await API.get(`${url}/${GET_REGISTRATIONDATA }`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
      }
      });
      return response.data;
    } catch (e) {
      return e;
    }
  };
  export const getListOfTabelServices = async () => {
    try {
      const response = await API.get(`${url}/${GET_TABAL_LISTOFORDER}`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
      }
      });
      return response.data;
    } catch (e) {
      return e;
    }
  };

  //Category
  export const postAddCategoryServices = async (props) => {
    console.log(props,"props");
    try {
      const response = await API.post(`${url}/${POST_CATEGORY_LIST}`,props,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
      }
      });
      return response.data;
    } catch (e) {
      return e;
    }
  };
  export const postListOfCategoryServices = async (props) => {
    try {
      const response = await API.post(`${url}/${POST_LISTOFCATEGORY}`,props,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
      }
      });
      return response.data;
    } catch (e) {
      return e;
    }
  };
  export const putEditCategoryServices = async (data,id) => {
    try {
      const response = await API.put(`${url}/${PUT_EDIT_CATEGORY}/${id.id}`,data,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
      }
      });
      return response.data;
    } catch (e) {
      return e;
    }

  };
  export const deleteCategoryServices = async (id) => {
    console.log(id,"idddd")
    try {
      const response = await API.put(`${url}/${DELETE_CATEGORY}/${id.id}`,id.data,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
      }
      });
      return response.data;
    } catch (e) {
      return e;
    }
  };

  export const prodectServices = async () => {
    try{
      const response = await API.get(`${urls}/${POST_VIEWPRODUCT}`);
      return response.data;
    }catch (e) {
      return e;
    }
  }