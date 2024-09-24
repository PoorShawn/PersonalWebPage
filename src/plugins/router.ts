import { createMemoryHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue')
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

export default router