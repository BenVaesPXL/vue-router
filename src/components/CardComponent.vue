<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    GoToDetails() {
      this.$route.push({ path: "/product/" + id });
    },
    GoToProduct() {
      this.$router.push({
        name: "product",
        params: { id: this.product.id },
        query: { title: this.product.title },
      });
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="card-overlay">
      <h1 class="card-overlay-heading">{{ product.title }}</h1>
      <p class="card-overlay-paragraph">Price: €{{ product.price }}</p>
      <button class="card-overlay-button" @click="GoToProduct">
        Order now
      </button>
      <router-link
        :to="{ name: 'product-detail', params: { id: this.product.id } }"
        class="card-overlay-button"
        @click="GoToDetails()"
        >Info</router-link
      >
    </div>
    <img :src="product.imageLink" :alt="product.imageAlt" class="card-image" />
  </div>
</template>
