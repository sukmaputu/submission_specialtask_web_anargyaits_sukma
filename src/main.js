import { createApp } from 'vue';
import App from './App.vue';
import router from './Router';
import './main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);
app.use(router);
app.mount('#app');


setTimeout(() => {
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true
  });
}, 100); 