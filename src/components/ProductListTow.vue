<template>
    <div class="ProductListTow">
        <h1>Product List Tow</h1>
      <ul>
        <li v-for="(product,index) in products" :key="index">
          <span v-text="product.name"></span> |
          <span v-text="product.price"></span>
        </li>
      </ul>

    </div>
</template>

<script>
    export default {
      name:'product-list-tow',
      computed : {
        products () {
          return this.$store.state.products
        }
      }

    };
</script>
<style scoped >
  .ProductListTow
  {
    padding: 20px;
    background-color: lightblue;
  }
  ul {
    list-style: none;
    text-transform: capitalize;
  }
  li
  {
    background-color: azure;
    padding: 30px;
    margin: 20px 0px;
  }

</style>
