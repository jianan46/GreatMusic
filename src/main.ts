import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import "xgplayer/dist/index.min.css";

createApp(App).use(router).mount("#app");
