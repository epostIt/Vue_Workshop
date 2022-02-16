import Vue from "vue";
import VueRouter from "vue-router";
import Workshop3 from "../components/Workshop3.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Workshop3,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
