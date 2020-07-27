<template>
  <div>
    <h1>Control speed asynchronously</h1>
    <button @click="asyIncrSpeed">Async Speed+</button>
    <button @click="asyDecrSpeed">Async Speed-</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function() {
    return {};
  },
  methods: {
    ...mapActions(["asyIncrSpeed", "asyDecrSpeed"])
  }
};
</script>
