<template>
  <div id="app">
    <FlavorfulHeader></FlavorfulHeader>
    <router-view />
    <div class="content"></div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import FlavorfulHeader from "./components/FlavorfulHeader.vue";

export default {
  name: "App",
  components: {
    FlavorfulHeader
  }
};
</script>


<style>
#app {
  margin-top: 60px;
}
</style>
