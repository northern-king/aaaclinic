import Vue from "vue";
import App from "./App.vue";

import Vuesax from "vuesax";
import "boxicons";

import "vuesax/dist/vuesax.css"; //Vuesax styles
import router from './router'
Vue.use(Vuesax, {
  // options here
  colors: {
    primary: "#5b3cc4",
    success: "rgb(23, 201, 100)",
    danger: "#9d080d",
    warning: "rgb(255, 130, 0)",
    dark: "rgb(36, 33, 69)",
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
