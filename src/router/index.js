import Vue from 'vue'
import VueRouter from 'vue-router'
import Book from '../components/Book.vue'
import Cart from '../components/Cart.vue'
import Customer from '../components/CustomerDetails.vue'
import Order from '../components/Order.vue'

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
  },
  {
    path: '/CustomerDetails',
    name: 'CustomerDetails',
    component:Customer
  },
  {
    path: '/Order',
    name: 'Order',
    component:Order
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.Base_URL,
  routes
})

export default router
