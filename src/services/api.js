import axios from "axios";

//const api = axios.create({ baseURL: "192.168.0.109:3008/api" });
const api = axios.create({ baseURL: `http://localhost:3008/api` });
export default api;
