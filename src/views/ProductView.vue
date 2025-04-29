<template lang="">
  <div>
    <h2>{{ Title }}</h2>
    <h2>{{ productName }}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Title: "product view",
    };
  },
  computed: {
    productName() {
      return this.$route.query.pn;
    },
  },
};
</script>
<style lang=""></style>
