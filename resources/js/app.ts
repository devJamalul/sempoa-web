import "../css/app.css";
import { createApp, h } from "vue";
import App from "./App.vue";
import App2 from "./App2.vue";

const public_config = {
    loginUrl:"https://erp.sempoa.id",
    whatsapp: '6281210225179',
    facebook: 'https://www.facebook.com/sempoa.erp',
}

const currentPath = window.location.pathname;
let renderPage = App;
if(currentPath== '/about'){
    renderPage=  App2 ;
}
createApp({ render: () => h(renderPage, { public_config: public_config }) }).mount("#app");