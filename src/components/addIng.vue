<template>
  <div class="container">
    <div>
      <b-table striped hover :items="items">
        <b-form-select v-model="selectMode" :options="modes" class="mb-3"></b-form-select>
      </b-table>
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
    onRowSelected(items) {
      this.selected = items;
    },
    selectAllRows() {
      this.$refs.selectableTable.selectAllRows();
    },
    clearSelected() {
      this.$refs.selectableTable.clearSelected();
    },
    selectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.selectRow(2);
    },
    unselectThirdRow() {
      // Rows are indexed from 0, so the third row is index 2
      this.$refs.selectableTable.unselectRow(2);
    },
  },
  created() {
    this.getRecepies();
  },
};
</script>

<style>
</style>
