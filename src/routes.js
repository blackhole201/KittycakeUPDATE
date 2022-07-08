import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "./components/HomePage";
import Faq from './components/Faq';
import WhitePaper from './components/WhitePaper';
const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomePage
    },
    {
        name:'Faqs',
        path:'/faq',
        component: Faq
    },
    {
        name: 'WhitePaper',
        path:'/white-paper',
        component: WhitePaper
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;