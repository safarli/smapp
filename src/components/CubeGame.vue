<template>
  <div>
    <h1>Cube Game</h1>
    <div id="cube" :style="boxStyle">Cube</div>
    <button>Show/Hide</button>
    <input v-model="boxobj.color" type="text" placeholder="enter cube color" />
    <button @click="cubeColorize(boxobj)">Change Color</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      boxobj: {
        color: "red",
        time: 2000
      }
    };
  },
  methods: {
    ...mapActions(["cubeVisible", "cubeColorize"]),
    ...mapGetters(["getCubeColor", "getCubeVisibility"])
  },
  computed: {
    boxStyle: function() {
      return {
        "background-color": this.getCubeColor(),
        display: this.getCubeVisibility()
      };
    }
  }
};
</script>

<style scoped>
#cube {
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  background-color: orangered;
}
</style>
