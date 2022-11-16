import axios from "axios";

const instance = axios.create({
    baseURL: "https://boiling-mountain-73573.herokuapp.com/" 
  });

export default instance;