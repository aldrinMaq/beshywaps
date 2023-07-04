import { createApp } from 'vue'
import App from './App.vue'

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';

import '/node_modules/primeflex/primeflex.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import PrimeVue from "primevue/config";
const app = createApp(App);

app.component('CustomButton', Button);
app.component('InputText', InputText);
app.component('TextArea', Textarea);



app.use(PrimeVue)
app.mount('#app')
