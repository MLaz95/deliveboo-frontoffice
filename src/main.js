import { createApp } from 'vue'
import App from './App.vue'
import './style.scss'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { router } from './router';

createApp(App).use(router).mount('#app');
