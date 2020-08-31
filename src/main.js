import Vue from "vue";
import antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import FormItem from "./components/FormItem";

Vue.use(antd);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(FormItem),
  components: {
    FormItem,
  },
}).$mount("#app");
