import axios from "axios";
import { getToken } from "../Component/CommonFunction";

let AuthHeader = getToken();
export const ServiceV1 = axios.create({
    baseURL: "http://mahaswari.com:1337",
    headers: {
      Accept: "application/json",
      Authorization: `${AuthHeader}`,
    },
  });