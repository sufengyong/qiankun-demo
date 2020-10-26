import Vue from 'vue'
import App from './App.vue'
import {
  registerMicroApps,
  setDefaultMountApp,
  start,
  runAfterFirstMounted
} from 'qiankun';


const useQianKun = () => {

  registerMicroApps(
    [
       {
        name: 'vue3', 
        entry: '//localhost:3000',
        container: '#subapp-viewport', 
        activeRule: '/vue3'
      },
    ],
    {
      beforeLoad: [
        () => {
          console.log('执行到这报错');
        },
      ],
      beforeMount: [
        app => {
          console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
        },
      ],
      afterUnmount: [
        app => {
          console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
        },
      ],
    },
  );

  /**
   * @name 设置默认进入的子应用
   * @param {String} 需要进入的子应用路由前缀
   */
  setDefaultMountApp('vue3');
  /**
   * @name 启动微前端
   */
  start();
  /**
   * @name 微前端启动进入第一个子应用后回调函数
   */
  runAfterFirstMounted(() => {
    console.log('[MainApp] first app mounted');
  });
};

Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount("#main-container");  

useQianKun();
