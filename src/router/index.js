import Vue from "vue";
import VueRouter from "vue-router";
import Workshop1 from "../components/Workshop1.vue";
import Workshop2 from "../components/Workshop2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Workshop1",
    name: "Home",
    component: Workshop1,
  },
  {
    path: "/",
    name: "Workshop2",
    component: Workshop2,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
