import axios from "axios";

export default axios.create({
  baseURL: "http://207.180.243.60:8080/suomayaApiRest/api/",//https://suomayaback.azurewebsites.net/api/",
  headers: {
    "Content-type": "application/json"
  }
});