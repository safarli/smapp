<template>
  <div>
    <h1>Main page</h1>
    <router-link :to="{ name: 'home' }" tag="a">Go Home</router-link>
    <router-link :to="{ name: 'contact' }" tag="a">Go Contact</router-link>
    <router-view></router-view>
    <table>
      <tr>
        <th>Index</th>
        <th>Name</th>
        <th>Lastname</th>
        <th>Age</th>
        <th>Nationality</th>
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
  data: function () {
    return {
      persons: [
        {
          index: 0,
          firstname: "Bendali",
          lastname: "Safarli",
          age: 23,
          nationality: "Azerbaijani",
          carplate: "90BE890",
        },
        {
          index: 1,
          firstname: "Alex",
          lastname: "Hoffman",
          age: 38,
          nationality: "German",
          carplate: "KLM103D",
        },
        {
          index: 2,
          firstname: "John",
          lastname: "Cena",
          age: 44,
          nationality: "USA",
          carplate: "NYC577",
        },
      ],
    };
  },
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
