<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div class="container">
    <h2>Registracija</h2>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-username"
        label="Korisničko ime"
        label-for="username"
        description="Unesite vaše korisničko ime"
      >
        <b-form-input id="username" v-model="regform.username" type="text" required></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-password"
        label="Lozinka"
        label-for="password"
        description="Unesite lozinku"
      >
        <b-form-input id="pass" v-model="regform.password" type="password" required></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-email"
        label="Email adresa"
        label-for="email"
        description="Unesite vašu e-mail adresu"
      >
        <b-form-input id="i-email" v-model="regform.email" type="email" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <div>
      <b-alert variant="success" :show="showAlert">Uspješno ste registrirani!</b-alert>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import api from '../../src/api';

export default {
  data() {
    return {
      users: [],
      showAlert: false,
      regform: {
        username: '',
        password: '',
        email: '',
      },
      show: true,
    };
  },
  methods: {
    getUsers() {
      const path = 'http://localhost:5000/register';
      axios
        .get(path)
        .then((res) => {
          this.users = res.data.users;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    addUser(user) {
      const path = 'http://localhost:5000/register';
      axios
        .post(path, user)
        .then(() => {
          this.getUsers();
          this.showAlert = true;
          this.show = false;
        })
        .catch((error) => {
          console.log(error);
          this.getUsers();
        });
    },
    initForm() {
      this.regform.username = '';
      this.regform.password = '';
      this.regform.email = '';
    },
    onSubmit(evt) {
      evt.preventDefault();
      const user = {
        username: this.regform.username,
        password: this.regform.password,
        email: this.regform.email,
      };
      this.addUser(user);
      this.initForm();
    },
    created() {
      this.getUsers();
    },
  },
};
</script>
