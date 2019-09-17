import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import NewRecepie from '@/components/NewRecepie';
import Recepies from '@/components/Recepies';
import RegistrationForm from '@/components/RegistrationForm';
import Login from '@/components/Login';
import Community from '@/components/Community';
import Search from '@/components/Search';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/new-recepie',
      name: 'NewRecepie',
      component: NewRecepie,
    },
    {
      path: '/sign-up',
      name: 'RegistrationForm',
      component: RegistrationForm,
    },
    {
      path: '/recepies',
      name: 'Recepies',
      component: Recepies,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/community',
      name: 'Community',
      component: Community,
    },
    {
      path: '/search-recepie',
      name: 'Search',
      component: Search,
    },
  ],
  mode: 'history',
});
