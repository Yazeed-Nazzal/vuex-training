<template>
  <div class="ProductListOne">
    <h1>Product List One</h1>
    <ul>
      <li v-for="(product, index) in sealProducts" :key="index">
        <span v-text="product.name"></span> |
        <span v-text="product.price"></span>
      </li>
    </ul>
    <button @click="realise">Realise Price</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: "product-list-one",
  computed: {
    products() {
      return this.$store.state.products;
     },
    ...mapGetters([
        "sealProducts"
    ])
    // seleproduct() {
    //   return this.$store.getters.sealProducts;
    // },
  },
  methods: {
    realise () {
      this.$store.dispatch('realise')
    }
  }
};
</script>
<style scoped>
.ProductListOne {
  background-color: #fff8b1;
  margin-bottom: 30px;
}
ul {
  list-style: none;
  text-transform: capitalize;
}
li {
  background-color: lightgoldenrodyellow;
  padding: 30px;
  width: 120px;
  margin: 20px;
  display: inline-block;
}
</style>
