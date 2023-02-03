import { GET_LOGIN } from "../api/apiEndpoints";
import { API } from "../api/generalService";

const url = "http://mahaswari.com:1337";

export const getLoginServices = async (params) => {
  console.log(params,"paramsServices")
    try {
      const response = await API.post(`${url}/${GET_LOGIN}`,params);
      return response.data;
    } catch (e) {
      return e;
    }
  };