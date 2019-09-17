<template>
  <div class="container">
    <b-navbar class="header" fixed="top" variant="info">
      <b-navbar-brand to="/">Flavorful</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/recepies">Pretraži recepte</b-nav-item>
        <b-nav-item to="/new-recepie">Unos novog recepta</b-nav-item>
        <b-nav-item to="/articles">Admin</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template slot="button-content">
            <em>Korisnik</em>
          </template>
          <b-dropdown-item to="/sign-up">Registracija</b-dropdown-item>
          <b-dropdown-item to="/login">Prijava</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'FlavorfulHeader',
};
</script>

