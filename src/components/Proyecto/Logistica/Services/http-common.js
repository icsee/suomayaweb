import axios from "axios";

export default axios.create({
  baseURL: "https://suomayaback.azurewebsites.net/api/",
  headers: {
    "Content-type": "application/json"
  }
});