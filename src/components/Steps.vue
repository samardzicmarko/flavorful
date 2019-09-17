<template>
  <div class="container">
    <h2>Postupak izrade jela</h2>
    <p>Nakon što ste unjeli generalne podatke o jelu i sastojke koji su potrebni za samu izradu, došlo je vrijeme kada ćete postepeno po koracima opisati postupak izrade jela.</p>

    <b-button @click="addStep" variant="primary">Dodaj Korak</b-button>
    <div v-for="(step, index ) in steps">
      <h4>{{count}}. korak</h4>

      <b-form-textarea
        :id="index"
        v-model="step.value"
        placeholder="Počnite tipkati :)"
        rows="3"
        max-rows="7"
      ></b-form-textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Steps',
  data() {
    return {
      steps: [],
      show: true,
      step: 1,
      count: 0,
    };
  },

  methods: {

  },
};
</script>

<style>
</style>
