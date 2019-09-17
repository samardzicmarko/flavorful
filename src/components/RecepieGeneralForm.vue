<template>
  <div id="newrecepieform">
    <div class="container">

    </div>
  </div>
</template>


<script>
export default {
  name: 'NewRecForm',
  props: {
    data: {
      type: Object,
    },
  },

  data() {
    return {
      form: {
        recepie_name: '',
        selected_complexity: '',
        persons: '',
      },
      show: true,
    };
  },
  methods: {
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.errors.has(ref);
      }
      return null;
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.recepie_name = '';
    },
  },
};
</script>
