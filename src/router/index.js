import {createRouter, createWebHistory} from 'vue-router'
import SignUp from "@/components/TypeOfVehicle.vue";
import model from "@/components/Model.vue";


export const RouterPath = {
    TypeOfvehicle: '/',
    Model:'/model'
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:RouterPath.TypeOfvehicle ,
            name: 'type-vehicle',
            component: SignUp
        },
        {
            path:RouterPath.Model ,
            name: 'model',
            component: model
        }
    ]
})
export default router