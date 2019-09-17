<template>
  <div class="container">
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-login"
        label="Korisničko ime: "
        label-for="input-user"
        description="Molimo unesite Vaše korisničko ime ili lozinku kako bi Vas mogli identificirati"
      >
        <b-form-input id="input-user" v-model="userDetails.email" type="text" required placeholder></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-password"
        label="Unesite lozinku: "
        label-for="input-password"
        description="Molimo unesite vašu lozinku"
      >
        <b-form-input
          id="input-password"
          v-model="userDetails.password"
          type="password"
          required
          placeholder
        ></b-form-input>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import VueRouter from 'vue-router';

export default {
  name: 'Login',
  data() {
    return {
      userDetails: {
        email: '',
        password: '',
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style>
</style>
