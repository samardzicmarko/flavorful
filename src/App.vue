<template>
  <div id="app">
    <router-view/>
    <div class="content"></div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'App',
};
</script>


<style>
#app {
  margin-top: 60px;
}
</style>
