// /src/routes.js

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

export const routes = [
   {
      path: '*',
      redirect: '/login'
   },{
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
         requiresAuth: false
      }      
   },{
      path: '/login',
      name: 'login',
      component: Login
   },{
      path: '/register',
      name: 'register',
      component: Register
   },{
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
         requiresAuth: true
      }      
   }
];