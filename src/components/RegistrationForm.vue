<template>
  <div class="container">
    <h2>Registracija</h2>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-username"
        label="Korisničko ime"
        label-for="username"
        description="Unesite vaše korisničko ime"
      >
        <b-form-input id="input-username" v-model="regform.username" type="text" required></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-password"
        label="Lozinka"
        label-for="password"
        description="Unesite lozinku"
      >
        <b-form-input id="input-password" v-model="regform.password" type="password" required></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-email"
        label="Email adresa"
        label-for="email"
        description="Unesite vašu e-mail adresu"
      >
        <b-form-input id="input-password" v-model="regform.email" type="email" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
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
      const path = 'http://localhost:5000/sign-up';
      axios
        .get(path)
        .then((res) => {
          this.users = regform.data.users;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    addUser(user) {
      const path = 'http://localhost:5000/sign-up';
      axios
        .post(path, user)
        .then(() => {
          this.getUsers();
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
