// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VeeValidate from 'vee-validate';
import firebase from 'firebase';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VeeValidate, {
  fieldsBagName: 'veeFields',
});

const firebaseConfig = {
  apiKey: 'AIzaSyBcdoksZA2ekIvewqvNhTvZpqcND8GZ-7k',
  authDomain: 'flavorful-9cb10.firebaseapp.com',
  databaseURL: 'https://flavorful-9cb10.firebaseio.com',
  projectId: 'flavorful-9cb10',
  storageBucket: '',
  messagingSenderId: '405203053753',
  appId: '1:405203053753:web:a14164d6ac52486e',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
