import Vue from 'vue';
import App from './App.vue';
import api from './api';

Vue.prototype.$http = api;

new Vue( {
    render: ( h ) => h( App ),
} ).$mount( '#app' );
