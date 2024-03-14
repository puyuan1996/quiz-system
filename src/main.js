// 这是一个简单的答题系统的前端界面实现。
// yarn serve 运行前端界面

// 这个示例将使用 Vue.js 作为前端框架，Element UI 作为 UI 组件库，以及 Axios 用于发起 HTTP 请求。
import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

Vue.use(ElementUI);

Vue.config.productionTip = false;

// 设置全局的 axios 默认值（例如，如果你有一个统一的API前缀）
axios.defaults.baseURL = 'http://localhost:8080/';

new Vue({
  render: h => h(App),
}).$mount('#app');