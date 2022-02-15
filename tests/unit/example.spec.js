import { shallowMount, config } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Vue from "vue";

// removes vuetify warnings
document.body.setAttribute("data-app", true);
config.silent = true;
Vue.config.silent = true;
describe("HelloWorld.vue", () => {
  test("The component renders", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.exists()).toBe(true);
  });

  test("We can access data variables", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.testVariable).toBe(false);
  });

  test("We can access methods", () => {
    const wrapper = shallowMount(HelloWorld);
    wrapper.vm.testMethod();
    expect(wrapper.vm.testVariable).toBe(true);
  });
});
