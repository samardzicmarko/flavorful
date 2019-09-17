<template>
  <div class="container">
    <ingridients v-bind:ing="ing"></ingridients>
  </div>
</template>

<script>
import addIng from './addIng';

export default {
  name: 'Search',
  components: {
    ingridients: addIng,
  },
  data() {
    return {};
  },
};
</script>

<style>
#subtitle {
  text-align: center;
}
#title {
  text-align: center;
}
</style>
