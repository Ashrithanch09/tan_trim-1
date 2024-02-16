import { GET_BAGS } from "../Constants/ApiEndpoints";
import axios from "axios";

export default class ApiService {
  static getBags = async (next) => {
    try {
      const response = await axios.get(GET_BAGS);
      next(response.data);
    } catch (err) {
      console.log(err);
    }
  };
}
