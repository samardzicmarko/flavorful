<template>
  <div class="container">
    <div>
      <b-form-group label="Selection mode:" label-cols-md="4">
        <b-form-select v-model="selectMode" :options="modes" class="mb-3"></b-form-select>
      </b-form-group>

      <b-table
        ref="selectableTable"
        selectable
        :select-mode="selectMode"
        selected-variant="success"
        :items="items"
        :fields="fields"
        @row-selected="onRowSelected"
        responsive="sm"
      >
        <!-- Example scoped slot for select state illustrative purposes -->
        <template v-slot:cell(selected)="{ rowSelected }">
          <template v-if="rowSelected">
            <span aria-hidden="true">&check;</span>
            <span class="sr-only">Selected</span>
          </template>
          <template v-else>
            <span aria-hidden="true">&nbsp;</span>
            <span class="sr-only">Not selected</span>
          </template>
        </template>
      </b-table>
      <p>
        <b-button size="sm" @click="clearSelected">Obrisi oznacene</b-button>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import api from '../../src/api';

export default {
  data() {
    return {
      items: [],
      selectMode: 'mult',
      selected: [],
      modes: ['multi', 'single', 'range'],
    };
  },
  methods: {
    getRecepies() {
      const path = 'http://localhost:5000/recepie';
      axios
        .get(path)
        .then(({ data }) => {
          this.items = data.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    clearSelected() {
      this.$refs.selectableTable.clearSelected();
    },
  },
  created() {
    this.getRecepies();
  },
};
</script>

<style>
</style>
