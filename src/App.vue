<template>
  <div>
    <h1>Main page</h1>

    <router-link :to="{ name: 'home' }" tag="a">Go Home</router-link>
    <router-link :to="{ name: 'asyncSpeed' }" tag="a">Go Contact</router-link>
    <router-link :to="{ name: 'addRecords' }" tag="a">Add Records</router-link>
    <router-link :to="{ name: 'viewRecords' }" tag="a"
      >View Records</router-link
    >
    <router-link :to="{ name: 'cubeGame' }" tag="a">Cube Game</router-link>
    <router-link :to="{ name: 'colorSelector'}" tag="a">Color Selector</router-link>

    <router-view></router-view>
    <hr />
    <div>
      <h3>Change speed by 10km/h</h3>
      <button @click="incrSpeed(10)">Speed+</button>
      <button @click="decrSpeed(10)">Speed-</button>
    </div>
    <p style="color: red;" v-if="isOverLimit">
      Warning! Please slow down, you are too fast!
    </p>
    <p>Current speed: {{ getSpeed }}km/h</p>
    <hr />
    <xeberler></xeberler>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Xeberler from "./components/Xeberler.vue";

export default {
  components: {
    Xeberler: Xeberler
  },
  data: function() {
    return {};
  },
  computed: {
    getSpeed: function() {
      return this.$store.getters.getSpeed;
    },
    isOverLimit: function() {
      return this.$store.getters.checkViolation;
    }
  },
  methods: {
    ...mapMutations(["incrSpeed", "decrSpeed"])
    // incSpeed: function() {
    //   this.$store.commit("incrSpeed", 10);
    // },
    // decSpeed: function() {
    //   this.$store.commit("decrSpeed", 10);
    // }
  }
};
</script>

<style scoped>
a:link,
a:visited {
  color: #333;
  border: 1px solid red;
  background-color: #fff;
  padding: 5px 10px;
  text-decoration: none;
}
a:hover,
a:active {
  background-color: #ddd;
}
</style>
