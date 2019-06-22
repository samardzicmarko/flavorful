<template>
  <div class="container">
    <div id="ingredientsform">
      <h2 class="title">Potrebni sastojci</h2>
      <h3 class="subtitle">Unesite listu sastojaka potrebnih za izradu Vašeg recepta</h3>
      <b-input-group
        id="input-group1"
        label="Unesite sastojke:"
        label-for="input-1"
        description="Unesite sve potrebne sastojke uz odgovarajuču količinu, npr grama, žlica, komada itd.."
      >
        <b-form-input id="input-1" v-model="new_input" type="text" @keyup.enter="add()"></b-form-input>
        <b-input-group-append>
          <b-button class="btn" variant="outline-info" @click="add()">Dodaj</b-button>
        </b-input-group-append>
      </b-input-group>
      <b-card-group deck id="list">
        <b-card header="Lista sastojaka">
          <b-list-group>
            <div class="view" v-if="!editActive">
              <b-list-group-item
                v-for="(ingredient, index) in ingredients_list"
                :key="index"
                class="list-group-item"
              >
                {{ingredient}}
                <b-button v-on:click="remove(ingredient)" variant="outline-secondary">Izbriši</b-button>
                <b-button v-on:click="editIng(editedIng)" variant="outline-secondary">Uredi</b-button>
              </b-list-group-item>
            </div>
          </b-list-group>

          <div class="editForm" v-if="editActive">
            <b-form-input
              id="input-1"
              v-model="editedIng"
              type="text"
              @blur="$emit('update')"
              v-focus
            ></b-form-input>
            <b-button variant="outline-primary" v-on:click="saveEdit()">Spremi</b-button>
            <b-button variant="outline-primary" v-on:click="disableEditing()">Odustani</b-button>
          </div>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IngredientsForm',

  data() {
    return {
      new_input: '',
      editedIng: null,
      ingredients_list: [],
      editActive: false,

      form: {
        ingredients_list: [{ ingredient: '' }],
      },
      show: true,
    };
  },
  methods: {
    add() {
      this.ingredients_list.push(this.new_input);
      this.new_input = '';
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    remove(ingredient) {
      this.ingredients_list.splice(
        this.ingredients_list.indexOf(ingredient),
        1,
      );
    },
    editIng(ing) {
      this.editedIng = ing;
      this.editActive = true;
      console.log('trig');
    },
    disableEditing() {
      this.editedIng = null;
      this.editActive = false;
    },
    saveEdit() {
      this.ingredient = this.editedIng;
      this.disableEditing();
    },
  },
  props: ['type'],
  directives: {
    inserted(el) {
      el.focus();
    },
  },
};
</script>
<style>
#list {
  margin-top: 10px;
}

#remove-content {
  float: right;
}
</style>

