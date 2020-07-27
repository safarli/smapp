<template>
  <div>
    <h3>Son Xeberler burada</h3>
    <div>Speed: {{ getSpeed }}</div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  computed: {
    getSpeed() {
      return this.$store.getters.getSpeed;
    }
  }
};
</script>

<style scoped></style>
