<template lang="">
  <div>
    <h1>{{ notFoundTitle }}</h1>
    <p>{{ notFoundMessage }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      notFoundTitle: "404 Not Found",
      notFoundMessage: "The page you are looking for does not exist.",
    };
  },
};
</script>
<style lang=""></style>
