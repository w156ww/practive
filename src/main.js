import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
if (Reflect.has(window.navigator, "serviceWorker")) {
    console.log("yes");
    window.navigator.serviceWorker
        .register("./serviceWorker/test.js")
        .then(() => {
            console.log("注册成功");
        })
        .catch(e => console.log("注册失败", e));
}
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
