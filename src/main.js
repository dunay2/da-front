import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; 
import '../node_modules/vue-draggable-resizable/dist/style.css';

createApp(App).use(router).mount('#app'); 
