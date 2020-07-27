<template>
  <div>
    <h1>Dropdown Color Selector</h1>
    <select v-model="selected">
      <option disabled value="">Select one item below</option>
      <option value="black">Black</option>
      <option value="red">Red</option>
      <option value="cyan">Cyan</option>
      <option value="blue">Blue</option>
      <option value="purple">Purple</option>
      <option value="yellow">Yellow</option>
      <option value="green">Green</option>
    </select>
    <p>Selected: {{ selected }}</p>
    <div class="box" :style="colorize">
      <p class="rainbow-text">COLORIZE THIS BOX</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      selected: null
    };
  },

  computed: {
    colorize() {
      return { "background-color": this.selected };
    }
  }
};
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 1px solid #444;
  text-align: center;
}

.rainbow-text {
  background-image: linear-gradient(
    to left,
    violet,
    indigo,
    blue,
    green,
    yellow,
    orange,
    red
  );
  -webkit-background-clip: text;
  color: transparent;
  font-size: 18px;
  font-weight: 600;
}
</style>
