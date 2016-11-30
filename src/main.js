import Vue from 'vue'
// 引入vue-router路由
import VueRouter from 'vue-router'
// Vue引用路由
Vue.use(VueRouter);

// 引入页面
import App from './pages/App.vue'
import about from './pages/changeColor.vue'
import care from './pages/puzzle.vue'

const routes = [
  // path:页面的路径('/'默认首页)  component：页面
  {
    path: '/',
    component: App
  },
  {
    path: '/aaa',
    component: about
  },
  {
    path: '/bbb',
    component: care
  }
];
// 将routes配置导入路由
const router = new VueRouter({routes});

new Vue({
  el: '#app',
  data() {
    return {
      transitionName: 'slide'
    }
  },
  // template: '<App><App/>', + // components: {App}   相当于render: h=> h(App)  将App页面渲染到index
  router: router,     // 路由启用
  // render: h => h(App)
  watch: {
    '$route' (to,from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      // console.log(to.path == '/',from.path);
      // console.log(toDepth,fromDepth);
      this.transitionName = to.path == '/' ? 'slide' : 'slide_back'
    }
  }
});
