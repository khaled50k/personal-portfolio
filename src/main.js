import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const app = createApp(App);

// Initialize AOS
app.config.globalProperties.$aos = new AOS.init();

app.mount('#app');