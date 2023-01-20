import axios from "axios";
const instance = axios.create({
  baseURL: "http://haeji.mawani.kro.kr:9999/",
  params: {},
});
export default instance;
