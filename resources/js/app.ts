import "../css/app.css";
import { createApp, h } from "vue";
import Home from "./Home.vue";
import About from "./About.vue";

const public_config = {
    loginUrl:"https://erp.sempoa.id",
    whatsapp: '6281210225179',
    facebook: 'https://www.facebook.com/sempoa.erp',
}

const currentPath = window.location.pathname;
let renderPage = Home;
if(currentPath== '/about'){
    renderPage=  About ;
}
createApp({ render: () => h(renderPage, { public_config: public_config }) }).mount("#app");