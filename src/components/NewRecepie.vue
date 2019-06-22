<template>
  <div id="RecepieWizardForm">
    <div class="container">
      <RecepieGeneralForm v-if="currentStepNumber === 1"/>
      <IngredientsForm v-if="currentStepNumber ===2"/>
      <div class="progress-bar">
        <div :style="'width: ${progress}%;'"></div>
      </div>
      <div class="buttons">
        <b-button
          id="back"
          @click="goBack"
          v-if="currentStepNumber > 1"
          class="btn-outlined"
        >Povratak</b-button>
        <b-button id="next" variant="outline-primary" @click="goNext" class="btn">Dalje</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import RecepieGeneralForm from './RecepieGeneralForm';
import IngredientsForm from './IngredientsForm';

export default {
  name: 'NewRecepie',
  components: {
    RecepieGeneralForm,
    IngredientsForm,
  },
  data() {
    return {
      currentStepNumber: 1,
      length: 4,
      form: {
        recepie_name: '',
        selected_complexity: '',
        persons: '',
        hours: '',
        IngridientName: '',
        ingredients_list: [],
      },
    };
  },
  computed: {
    progress() {
      return (this.currentStepNumber / this.length) * 100;
    },
  },
  methods: {
    goBack() {
      this.currentStepNumber--;
    },
    goNext() {
      this.currentStepNumber++;
    },
  },
};
</script>

<style>
.buttons {
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  display: inline-block;
  margin-right: 40%;
}
.buttons a:not(:last-of-type),
.buttons button:not(:last-of-type) {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}
.btn {
  display: inline-block;
  color: #fff;
  background-color: #09848d;
  text-decoration: none;
  border-radius: 0.25rem;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.875rem;
  border-width: 2px;
  border-color: #09848d;
  letter-spacing: 0.2;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.btn:hover {
  background: rgba(37, 142, 149, 0.96);
  border-color: rgba(37, 142, 149, 0.96);
}
</style>
