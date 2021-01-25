import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/AddAnimales',
        name: 'AddAnimales',
        component: () =>
            import ('../views/AddAnimales.vue')
    }, {
        path: '/Contacto',
        name: 'Contacto',
        component: () =>
            import ('../views/Contacto.vue')
    }, {
        path: '/Documental',
        name: 'Documental',
        component: () =>
            import ('../views/Documental.vue')
    }, {
        path: '/Autores',
        name: 'Autores',
        component: () =>
            import ('../views/Autores.vue')
    }, {
        path: '/ListaAnimales',
        name: 'ListaAnimales',
        component: () =>
            import ('../views/ListaAnimales.vue')
    }, {
        path: '/Tabla',
        name: 'tabla',
        component: () =>
            import ('../views/Tabla.vue')
    }
]

const router = new VueRouter({
    mode: "history",
    base: '/practicawd/',
    routes
})

export default router