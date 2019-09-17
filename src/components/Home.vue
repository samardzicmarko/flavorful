<template>
  <div class="img">
    <b-container class="home-menu">
      <b-row align-v="center">
        <b-col>
          <h2>Imate brz i fin recept?</h2>
          <b-button variant="success" to="/new-recepie">Podijelite da probamo!</b-button>
        </b-col>
        <b-col>
          <h2>Želite iskoristiti ono što već imate?</h2>
          <b-button variant="success" to="/search-recepie">Napišite nam namirnice</b-button>
        </b-col>
        <b-col>
          <h2>Nešto vam se kuha, a ne znate što?</h2>
          <b-button variant="success" to="/recepies">Recepti</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home-menu {
  margin-top: 400px;
  text-align: center;
}
</style>
