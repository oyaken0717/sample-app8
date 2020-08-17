import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

  const firebaseConfig = {
    apiKey: "AIzaSyDgowSJxHcJIsI8goaDgP-FdP731_MujHY",
    authDomain: "my-address-pj8.firebaseapp.com",
    databaseURL: "https://my-address-pj8.firebaseio.com",
    projectId: "my-address-pj8",
    storageBucket: "my-address-pj8.appspot.com",
    messagingSenderId: "302612756732",
    appId: "1:302612756732:web:dae96ba8c65d4962c5bf79",
    measurementId: "G-J8QMVV7KP3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
