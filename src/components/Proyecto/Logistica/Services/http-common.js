import axios from "axios";

export default axios.create({
  baseURL: "https://suomaya.co:8081/suomayaApiRest/api/",//https://suomayaback.azurewebsites.net/api/",
  headers: {
    "Content-type": "application/json"
  }
});