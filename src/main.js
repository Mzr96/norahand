import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import VueApexCharts from "vue3-apexcharts";
import ApiService from "./core/services/ApiServices";
import { createPinia } from "pinia";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
const pinia = createPinia();
ApiService.init(app);
app.use(router);
app.use(pinia);
app.use(VueApexCharts);
app.use(ElementPlus);
window.Apex.chart = { fontFamily: "farsinum" };
app.mount("#app");
