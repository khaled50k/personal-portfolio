import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Particles from "vue3-particles";
import VueWriter from "vue-writer";
import VueTyperPlugin from 'vue-typer'

createApp(App).use(Particles).use(VueTyperPlugin).mount("#app");
