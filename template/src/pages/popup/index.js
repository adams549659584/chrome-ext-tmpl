import Vue from 'vue'
import App from './App'
{{#router}}
import router from '../../router'
{{/router}}
{{#elementUI}}
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
{{/elementUI}}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  components: { App },
  template: '<App/>'
})
