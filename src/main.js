// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/zh-CN';
import locale from 'element-ui/lib/locale';

import './theme.scss';

import * as echarts from 'echarts';

Vue.config.productionTip = false;

// 设置语言
locale.use(lang);
// 引入组件
Vue.use(ElementUI, {size: 'small', zIndex: 3000});

// 引入组件
Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
