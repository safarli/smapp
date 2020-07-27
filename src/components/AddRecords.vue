<template>
  <div>
    <h1>Add Record Page</h1>
    <form>
      <input
        v-model="name"
        type="text"
        placeholder="Enter your name here"
        required
      />
      <input
        v-model="lastname"
        type="text"
        placeholder="Enter your lastname here"
        required
      />
      <input
        v-model="carplate"
        type="text"
        placeholder="Enter your car license plate here"
        required
      />
      <button type="submit" @click="addToStore">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: null,
      lastname: null,
      carplate: null
    };
  },
  methods: {
    addToStore: function(event) {
      event.preventDefault();
      const person = {
        firstname: this.name,
        lastname: this.lastname,
        carplate: this.carplate
      };
      this.$store.commit("addRecord", person);
      alert("Data has successfully been added to the store!");
      this.nullifyForm();
    },
    nullifyForm: function() {
      (this.name = null), (this.lastname = null), (this.carplate = null);
    }
  },
  computed: {},
  components: {}
};
</script>

<style scopted>
input {
  width: 300px;
  display: block;
}
</style>
