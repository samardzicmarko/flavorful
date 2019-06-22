<template>
  <div id="newrecepieform">
    <div class="container">
      <div id="newrecepieform">
        <h2>Unos novog recepta</h2>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Naziv recepta:"
            label-for="input-1"
            description="Unesite ime vašeg recepta, na način da ga najbolje opisuje:)"
          >
            <b-form-input
              id="input-1"
              v-model="form.recepie_name"
              type="text"
              v-validate="'required|alpha|min:3'"
              :state="validateState('form.recepie_name')"
              aria-describedby="recepie_name-feedback"
            ></b-form-input>
            <b-form-invalid-feedback
              id="recepie_name-feedback"
            >Ovo polje je obavezno, te mora imati barem 8 znakova.</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group label="Složenost jela:">
            <b-form-radio-group
              id="radio-group-1"
              v-model="form.selected_complexity"
              name="selected_complexity"
            >
              <b-form-radio value="small">Jednostavno</b-form-radio>
              <b-form-radio value="medium">Srednje zahtjevno</b-form-radio>
              <b-form-radio value="large">Zahtjevno</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <b-form-group
            id="input-group-3"
            label="Osoba: "
            label-for="input-3"
            description="Unesite za koliko je osoba predviđen recept."
          >
            <b-form-input id="input-3" v-model="form.persons" type="number"></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-4"
            label="Sati i minuta potrebno za izradu?"
            label-for="input-4"
            description="Okvirno procjenite koliko je vremena potrebno kako bi napravili Vaš recept"
          >
            <b-form-input id="input-4" v-model="form.hours" type="time"></b-form-input>
          </b-form-group>
        </b-form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'NewRecForm',
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
