import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new  Vuex.Store({
  state: {
    products: [
      { name: "Car", price: "10" },
      { name: "ball", price: "20" },
      { name: "phone", price: "30" },
      { name: "dog", price: "40" },
    ],
  },
  getters: {
    sealProducts:state => {
      let sealProducts = state.products.map( product => {
         return {
           name:product.name,
           price:product.price/2
         }
      });
      return sealProducts;
    }
  },
  mutations: {
    realise : state => {
      state.products.forEach(product => {
        return product.price-=1
      });
    }
  },
  actions: {
    realise : context => {
      setTimeout( function () {
          context.commit('realise');
      },3000);
    }
  }
});
