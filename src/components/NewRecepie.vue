<template>
  <div id="RecepieWizardForm">
    <div class="container">
      <div id="newrecepieform">
        <b-card bg-variant="light">
          <h2>Unos novog recepta</h2>
          <b-form v-if="currentStepNumber <2">
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
                aria-describedby="recepie_name-feedback"
              ></b-form-input>
              <b-form-invalid-feedback
                id="recepie_name-feedback"
              >Ovo polje je obavezno, te mora imati barem 8 znakova.</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label="Složenost jela:">
              <b-form-radio-group id="radio-group-1" v-model="form.complexity" name="complexity">
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
              <b-form-input id="input-4" v-model="form.time" type="time"></b-form-input>
            </b-form-group>
            <b-form-select
              v-model="form.category"
              id="input-group-5"
              label="Kategorija jela:"
              label-for="iinput-group-5"
            >
              <option value="null">Odaberite kategoriju Jela</option>
              <option value="Meso">Meso</option>
              <option value="Tjestenina">Tjestenina</option>
              <option value="Riba">Riba</option>
              <option value="Juhe">Juhe</option>
              <option value="Vege">Vege</option>
              <option value="Salate">Salate</option>
              <option value="Deserti">Deserti</option>
              <option value="Vege">Vege</option>
              <option value="Selete">Selete</option>
              <option value="Deserti">Deserti</option>
              <option value="Gluten-Free">Gluten-Free</option>
            </b-form-select>
          </b-form>
          <div id="ingridient" v-if="currentStepNumber === 2">
            <div id="ingredientsform">
              <h5 class="title">Potrebni sastojci</h5>
              <p class="subtitle">Unesite listu sastojaka potrebnih za izradu Vašeg recepta</p>
              <b-input-group
                id="input-group1"
                label="Unesite sastojke:"
                label-for="input-1"
                description="Unesite sve potrebne sastojke uz odgovarajuču količinu, npr grama, žlica, komada itd.."
              >
                <b-form-input
                  id="input-1"
                  v-model="inputingridient"
                  type="text"
                  @keyup.enter="addIngridient()"
                ></b-form-input>
                <b-input-group-append>
                  <b-button class="btn" variant="outline-info" @click="addIngridient()">Dodaj</b-button>
                </b-input-group-append>
              </b-input-group>
              <b-card-group deck id="list">
                <b-card header="Lista sastojaka">
                  <b-list-group>
                    <div class="view">
                      <b-list-group-item
                        class="list-group-item"
                        v-for="(ing, i) in form.ingredients"
                        v-bind:key="i"
                      >
                        {{ing}}
                        <b-button
                          variant="outline-secondary"
                          v-on:click="removeIngridient(ingredient)"
                        >Izbriši</b-button>
                      </b-list-group-item>
                    </div>
                  </b-list-group>
                </b-card>
              </b-card-group>
              <badge :message="message" v-if="showMessage"></badge>
            </div>
          </div>
          <div class="steps" v-if="currentStepNumber > 2">
            <h2>Postupak izrade jela</h2>
            <p>Nakon što ste unjeli generalne podatke o jelu i sastojke koji su potrebni za samu izradu, došlo je vrijeme kada ćete postepeno po koracima opisati postupak izrade jela.</p>
            <b-form-textarea
              :id="index"
              v-model="form.steps"
              placeholder="Počnite tipkati :)"
              rows="3"
              max-rows="7"
            ></b-form-textarea>
          </div>
          <div class="buttons">
            <b-button
              id="back"
              @click="goBack"
              v-if="currentStepNumber > 1"
              class="btn-outlined"
            >Povratak</b-button>
            <b-button
              id="next"
              variant="outline-primary"
              @click="goNext"
              class="btn"
              v-if="currentStepNumber < 3"
            >Dalje</b-button>
            <b-button
              id="addRecepie"
              class="btn btn-success"
              v-if="currentStepNumber > 2"
              @click="onSubmit"
            >Dodaj recept</b-button>
          </div>
          <div>
            <b-alert variant="success" :show="showAlert">Uspješno ste unjeli recept!</b-alert>
          </div>
          <b-button
            class="btn btn-success"
            v-if="showHomeButton"
            to="/"
          >Odvedi me na početnu stranicu</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Success from './Success';
import axios from 'Axios';

export default {
  name: 'NewRecepie',
  components: {
    badge: Success,
  },
  data() {
    return {
      step: 1,
      countSteps: [],
      currentStepNumber: 1,
      length: 4,
      inputingridient: '',
      message: '',
      showAlert: false,
      showHomeButton: false,
      form: {
        recepie_name: null,
        complexity: null,
        persons: null,
        time: null,
        IngridientName: null,
        ingredients: [],
        category: null,
        steps: '',
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
    addIngridient() {
      this.form.ingredients.push(this.inputingridient);
      this.inputingridient = '';
    },
    removeIngridient(ing) {
      this.form.ingredients.splice(this.form.ingredients.indexOf(ing), 1);
    },
    addRecepie(recepie) {
      const api = 'http://localhost:5000/recepie';
      axios
        .post(api, recepie)
        .then(() => {
          this.showAlert = true;
          this.show = false;
          this.showHomeButton = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    initForm() {
      this.form.recepie_name = '';
      this.form.complexity = '';
      this.form.persons = '';
      this.form.time = '';
      this.form.ingredients = [];
      this.category = '';
      this.steps = '';
    },
    onSubmit(e) {
      e.preventDefault();
      const recepie = {
        recepie_name: this.form.recepie_name,
        complexity: this.form.complexity,
        persons: this.form.persons,
        time: this.form.time,
        ingredients: this.form.ingredients,
        category: this.form.category,
        steps: this.form.steps,
      };
      this.addRecepie(recepie);
      this.initForm();
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
  margin-right: 40%;
  align: center;
  padding: 20px;
}
.buttons a:not(:last-of-type),
.buttons button:not(:last-of-type) {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}
.btn {
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

#newrecepieform {
  margin-top: 100px;
}
</style>
