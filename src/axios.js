import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-fa779.cloudfunctions.net/api",
  //"http://localhost:5001/clone-fa779/us-central1/api",
});

export default instance;
