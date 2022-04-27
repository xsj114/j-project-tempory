import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/index.css';
import api from './api';

const app = createApp( App );
app.config.globalProperties.$http = api;

app.mount( '#app' );
