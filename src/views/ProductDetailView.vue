<template>
  <div>
    <h2>Product met id: {{ productId }}</h2>
  </div>
</template>
<script>
export default {
  computed: {
    productId() {
      return this.$route.params.id;
    },
  },
};
</script>
<style lang="scss"></style>
