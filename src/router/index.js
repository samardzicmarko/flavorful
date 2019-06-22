import Vue from 'vue';
import Router from 'vue-router';
import Ping from '@/components/Ping';
import NewRecepie from '@/components/NewRecepie';
import RegistrationForm from '@/components/RegistrationForm';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ping',
      component: Ping,
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
  ],
  mode: 'history',
});
