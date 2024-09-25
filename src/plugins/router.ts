import { createMemoryHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/articles',
        name: 'Articles',
        component: () => import('../pages/Articles.vue')
    },
    {
        path: '/tags',
        name: 'Tags',
        component: () => import('../pages/Tags.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../pages/About.vue')
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

export default router