import { shallowMount, config } from "@vue/test-utils";
import Workshop2 from "@/components/Workshop2.vue";
import Vue from "vue";

// removes vuetify warnings
document.body.setAttribute("data-app", true);
config.silent = true;
Vue.config.silent = true;
describe("Workshop1.vue", () => {
  test("The component renders", () => {
    const wrapper = shallowMount(Workshop2);
    expect(wrapper.exists()).toBe(true);
  });
});
