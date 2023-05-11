import { createWebHashHistory, createRouter } from "vue-router";
import Index from "../page/Index.vue";

const routes = [{ path: "/", component: Index }];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
