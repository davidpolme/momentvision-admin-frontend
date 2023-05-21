import {HOST} from "../constants";
import axios from "axios";
export const sendProgrammerApi = (data) => {
  return axios.post(`${HOST}/api/programmers`, data);
};
