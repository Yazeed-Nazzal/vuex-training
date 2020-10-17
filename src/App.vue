<template>
  <div id="app">
      <product-list-one ></product-list-one>
      <product-list-tow ></product-list-tow>
  </div>
</template>

<script>
import ProductListOne from "@/components/ProductListOne";
import ProductListTow from "@/components/ProductListTow";
export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {ProductListTow, ProductListOne},
};
</script>

<style>
</style>
