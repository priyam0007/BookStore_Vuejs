import Vue from 'vue'
import VueRouter from 'vue-router'
import Book from '../components/Book.vue'
import Cart from '../components/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Book',
    component: Book
  },
  {
    path: '/Cart',
    name: 'Cart',
    component:Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.Base_URL,
  routes
})

export default router
