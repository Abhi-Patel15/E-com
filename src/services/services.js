import { DELETE_CATEGORY,
        GET_CARD_COUNOFDATA, 
        GET_GRAPH_GRAPHOFDATA, 
        GET_GRAPH_REGISTRATIONDATA, 
        GET_LOGIN,
         GET_TABAL_LISTOFORDER, 
        POST_CATEGORY_LIST, 
        POST_EDIT_CATEGORY_LIST, 
        PUT_EDIT_CATEGORY } from "../api/apiEndpoints";
import { API } from "../api/generalService";

const url = "http://mahaswari.com:1337";

export const getLoginServices = async (params) => {
    try {
      const response = await API.post(`${url}/${GET_LOGIN}`,params);
      return response.data;
    } catch (e) {
      return e;
    }
  };

  //dashbord
 export const getCounOfTabelServices = async (props) => {
    try {
      const response = await API.get(`${url}/${GET_CARD_COUNOFDATA}`,props);
      return response.data;
    } catch (e) {
      return e;
    }
  };
  export const getGraphOfTabelServices = async (props) => {
    try {
      const response = await API.get(`${url}/${GET_GRAPH_GRAPHOFDATA}`,props);
      return response.data;
    } catch (e) {
      return e;
    }
  };
  export const getRegistraionOfTabelServices = async (props) => {
    try {
      const response = await API.get(`${url}/${GET_GRAPH_REGISTRATIONDATA}`,props);
      return response.data;
    } catch (e) {
      return e;
    }
  };
  export const getListOfTabelServices = async (props) => {
    try {
      const response = await API.get(`${url}/${GET_TABAL_LISTOFORDER}`,props);
      return response.data;
    } catch (e) {
      return e;
    }
  };

  //Category
  export const postAddCategoryServices = async (props) => {
    try {
      const response = await API.post(`${url}/${POST_CATEGORY_LIST}`,props);
      return response.data;
    } catch (e) {
      return e;
    }
  };
  export const postListOfCategoryServices = async (props) => {
    try {
      const response = await API.post(`${url}/${POST_EDIT_CATEGORY_LIST}`,props);
      return response.data;
    } catch (e) {
      return e;
    }
  };
  export const putEditCategoryServices = async (props) => {
    try {
      const response = await API.put(`${url}/${PUT_EDIT_CATEGORY}`,props);
      return response.data;
    } catch (e) {
      return e;
    }

  };
  export const deleteCategoryServices = async (props) => {
    try {
      const response = await API.put(`${url}/${DELETE_CATEGORY}`,props);
      return response.data;
    } catch (e) {
      return e;
    }
  };