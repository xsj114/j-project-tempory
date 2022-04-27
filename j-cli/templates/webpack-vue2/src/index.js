import Vue from 'vue';
import App from './App.vue';
import '@assets/css/index.css';
import api from './api';

Vue.prototype.$http = api;

new Vue( {
    render: ( h ) => h( App ),
} ).$mount( '#app' );
