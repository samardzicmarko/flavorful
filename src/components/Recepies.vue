<template>
  <div class="container">
    <div id="recepieslist">
      <b-card bg-variant="light">
        <div class="page-header">
          <h2>Pretraga recepata</h2>
        </div>
        <b-card class="light">
          <div class="filter">
            <b-button variant="outline-secondary" @click="showFilter" v-if="!expandFilter">Filter</b-button>
            <b-button
              variant="outline-secondary"
              @click="hideFilter"
              v-if="expandFilter"
            >Sakrij filtere</b-button>

            <b-row class="filterrow" v-if="expandFilter">
              <b-col>
                <div>
                  Filtriranje po kategoriji jela:
                  <b-form-select v-model="category" :options="options" id="selectCategory"></b-form-select>
                  {{category}}
                </div>
              </b-col>
              <b-col>
                <b-form-group label="Odaberite složenost jela">
                  <b-form-radio v-model="complexity" value="small">Jednostavno</b-form-radio>
                  <b-form-radio v-model="complexity" value="medium">Srednje zahtjevno</b-form-radio>
                  <b-form-radio v-model="complexity" value="large">Zahtjevno</b-form-radio>
                </b-form-group>
              </b-col>
              <b-col>
                Unesite za koliko osoba želite spremiti jelo:
                <b-form-input type="number" v-model="persons"></b-form-input>
              </b-col>
            </b-row>
            <b-button
              class="btn btn-info"
              @click="filterCategory"
              v-if="expandFilter"
            >Pretraži po kategorijama</b-button>
            <b-button
              class="btn btn-info"
              @click="filterComplexity"
              v-if="expandFilter"
            >Pretraži po zahtjevnosti</b-button>
            <b-button
              class="btn btn-info"
              @click="filterPersons"
              v-if="expandFilter"
            >Pretraži po količini</b-button>
          </div>
        </b-card>
        <div class="info">
          <p>Ukupno rezultata: {{recepies.length}}</p>
        </div>
        <div class="results" v-for="(rec, i) in recepies" :key="i" v-if="!filteredResults">
          <b-card>
            <b-row>
              <b-col cols="8">
                <h4>{{rec.recepie_name}}</h4>
                <b-card-text>{{rec.steps}}</b-card-text>
              </b-col>

              <b-col cols="4">
                Vrijeme:
                {{rec.time}}
                <br />
                Zahtjevnost izvođenja: {{rec.complexity}}
                <br />
                Količina: za {{rec.persons}} osobe
              </b-col>
            </b-row>
          </b-card>
        </div>
        <div
          class="filtered results"
          v-for="(frec, i) in filteredRecepies"
          :key="i"
          v-if="filteredResults"
        >
          <b-card>
            <b-row>
              <b-col cols="8">
                <h4>{{frec.recepie_name}}</h4>
                <b-card-text>{{frec.steps}}</b-card-text>
              </b-col>

              <b-col cols="4">
                Vrijeme:
                {{frec.time}}
                <br />
                Zahtjevnost izvođenja: {{frec.complexity}}
                <br />
                Količina: za {{frec.persons}} osobe
              </b-col>
            </b-row>
          </b-card>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import api from '../../src/api';
import axios from 'Axios';

export default {
  data() {
    return {
      recepies: {},
      filteredRecepies: {},
      category: '',
      persons: '',
      complexity: '',
      expandFilter: false,
      filteredResults: false,
      options: [
        { value: 'Meso', text: 'Meso' },
        { value: 'Tjestenina', text: 'Tjestenina' },
        { value: 'Riba', text: 'Riba' },
        { value: 'Juhe', text: 'Juhe' },
        { value: 'Vege', text: 'Vege' },
        { value: 'Salate', text: 'Salate' },
        { value: 'Deserti', text: 'Deserti' },
        { value: 'Gluten-Free', text: 'Gluten-Free' },
      ],
    };
  },
  methods: {
    getRecepies() {
      api
        .get('recepie')
        .then(({ data }) => {
          this.recepies = data.data;
          console.log(this.recepies);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    filterCategory(e) {
      e.preventDefault();
      const category = this.category;
      api /*eslint-disable */
        .get("filter/" + category)
        .then(({ data }) => {
          this.filteredRecepies = data.data;
          console.log(filteredRecepies);
          this.filteredResults = true;
        })
        .catch(error => {
          console.error(error);
        });
    },
    filterComplexity(e) {
      e.preventDefault();
      const complexity = this.complexity;
      api /*eslint-disable */
        .get("filter/" + complexity)
        .then(({ data }) => {
          this.recepies = data.data;
          this.filteredResults = true;
          console.log("usao");
        })
        .catch(error => {
          console.error(error);
        });
    },
    filterPersons(e) {
      e.preventDefault();
      const persons = this.persons;
      api /*eslint-disable */
        .get("filter/" + persons)
        .then(({ data }) => {
          this.filteredRecepies = data.data;
          this.filteredResults = true;
        })
        .catch(error => {
          console.error(error);
        });
    },
    showFilter() {
      this.expandFilter = true;
    },
    hideFilter() {
      this.expandFilter = false;
    }
  },
  mounted() {
    this.getRecepies();
    this.filterCategory();
    this.filterComplexity();
    this.filterPersons();
  }
};
</script>


<style>
.results {
  padding: 20px;
}

#recepieslist {
  margin-top: 100px;
}
</style>
