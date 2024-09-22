import { Key } from "src/utils/Key";

const routes = [
    {
        path: "/",
        redirect: { name: Key.LOGIN },
    },
    // {
    //     name: "Login",
    //     path: "/login",
    //     component: () => import("pages/login/index.vue"),
    //     meta: {
    //         title: "routerI8n.project",
    //         auth: false,
    //     },
    // },
    {
        path: "/",
        component: () => import("layouts/MainLayout.vue"),
        meta: {
            auth: true,
        },
        children: [
            {
                name: "Project",
                path: "/project",
                component: () => import("pages/project/index.vue"),
                meta: {
                    auth: true,
                    title: "project",
                },
            },
            {
                name: "Tool",
                path: "/tool",
                component: () => import("pages/tool/index.vue"),
                meta: {
                    auth: true,
                    title: "tool",
                },
            },
        ],
    },
];

export default routes;
