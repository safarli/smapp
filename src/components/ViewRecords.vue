<template>
  <div>
    <h1>View Records Page</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Lastname</th>
        <th>Car Plate</th>
      </tr>
      <tr v-for="person in persons" :key="person.index">
        <td v-for="prop in person" :key="prop">{{ prop }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      persons: null
    };
  },
  created: function() {
    this.persons = this.$store.getters.getPersons;
  }
};
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
}
</style>
