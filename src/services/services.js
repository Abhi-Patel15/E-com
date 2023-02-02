import { GET_LOGIN } from "../api/apiEndpoints";
import { API } from "../api/generalService";

const url = "http://mahaswari.com:1337";

export const getLogin = async () => {
    try {
      const response = await API.POSt(`${url}/${GET_LOGIN}`);
      return response.data;
    } catch (e) {
      return e;
    }
  };