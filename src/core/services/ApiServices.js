import axios from "axios";
import VueAxios from "vue-axios";
// import JwtService from "@/core/services/JwtService";

class ApiService {
  static vueInstance;

  static init(app) {
    ApiService.vueInstance = app;
    ApiService.vueInstance.use(VueAxios, axios);
    ApiService.vueInstance.axios.defaults.baseURL =
      import.meta.env.VITE_APP_API_URL;
  }

  static query(resource, params) {
    return ApiService.vueInstance.axios.get(resource, params);
  }

  static get(resource, slug = "") {
    return ApiService.vueInstance.axios.get(`${resource}/${slug}`);
  }
}

export default ApiService;
