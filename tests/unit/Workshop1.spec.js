import { shallowMount, config } from "@vue/test-utils";
import Workshop1 from "@/components/Workshop1.vue";
import Vue from "vue";

// removes vuetify warnings
document.body.setAttribute("data-app", true);
config.silent = true;
Vue.config.silent = true;
describe("Workshop1.vue", () => {
  test("The component renders", () => {
    const wrapper = shallowMount(Workshop1);
    expect(wrapper.exists()).toBe(true);
  });

  test("We can access data variables", () => {
    const wrapper = shallowMount(Workshop1);
    expect(wrapper.vm.testVariable).toBe(false);
  });

  test("We can access methods", () => {
    const wrapper = shallowMount(Workshop1);
    wrapper.vm.testMethod();
    expect(wrapper.vm.testVariable).toBe(true);
  });
});
