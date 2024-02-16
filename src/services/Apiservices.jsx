import { GET_BAGS } from "../Constants/ApiEndpoints";
import axios from "axios";

export default class ApiService {
  static getBags = async () => {
    try {
      const response = await fetch(GET_BAGS);
      const data = await response.json(); // Access the data property to get the response body
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
}
