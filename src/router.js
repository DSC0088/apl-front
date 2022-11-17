import { createRouter, createWebHistory } from "vue-router"
const routeInfos = [
    {
        path : "/",
        component : () => import("./components/HomePage")
    },    
    {
        path : "/products",
        component : () => import("./components/ProductsList")
    },
    {
        path : "/product-view/:id",
        component : () => import("./components/ProductView")
    },
    {
        path : "/product-by-brand",
        component : () => import("./components/ProductsByBrand")
    },
    {
        path : "/product-add",
        component : () => import("./components/ProductEditor")
    },
    {
        path : "/product-edit/:id",
        component : () => import("./components/ProductEditor")
    },
    
]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

export default router;