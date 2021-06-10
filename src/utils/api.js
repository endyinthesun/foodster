import axios from "axios";
export default axios.create({
  //work only with localtunnel
  baseURL: `https://serv.loca.lt`,
});
