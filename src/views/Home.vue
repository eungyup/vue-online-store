<template>
  <div>
    <section class="wrapper">
      <h2>Featured Items</h2>
      <ul class="featured-items">
        <!-- <li v-for="product in products" :key="product.id" class="featured-items__item"> -->
        <!-- In Part 6- 2 change products to "featuredProducts" so that only show the featured
        products  -->
        <li v-for="product in featureProducts" :key="product.id" class="featured-items__item">
          <!-- (my) Part 3 -->
          <router-link :to="{ name: 'product', params: {id: product.id}}">
            <!-- // (my) for reusable methods -> mixins -->
            <img class="product-image" :src="makeImagePath(product)" alt="">
            <p class="product-title">{{ product.name }}</p>
            <p><em>${{ product.price }}</em></p>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
// (my) for reusable methods -> mixins
import {imagePath} from '@/mixins/imagePath.js'

export default {
  name: 'home',
  computed: {
    // products: function() {
    //   return this.$store.state.products
    // }

    // (my) my below code is exatly same as above
    // products() {
    //   return this.$store.state.products
    // }
    // Part 6-2 use featureProducts instead of "products" above so that we show the featured product
    featureProducts: function(){
      return this.$store.getters.featureProducts.slice(0,3);
    }
  },
  // (my) for reusable methods -> mixins
  mixins: [imagePath],
  // methods: {
  //   //(my) 
  //   // imagePath: function(product)
  //   // above code is same as below
  //   imagePath(product) {
  //     return require(`../assets/img/products/${product.images[0]}`);
  //   }
  // }
};
</script>

<style lang="scss">
.wrapper {
  max-width: 800px;
  margin: 0 auto;
  @media only screen and (max-width: 832px) {
    max-width: 100%;
    padding: 1rem;
    text-align: center;
  }
}
.featured-items {
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 832px) {
    flex-direction: column;
  }
}
.featured-items__item {
  width: 33%;
  text-align: center;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.product-image {
  max-height: 200px;
}
.product-title {
  font-weight: bold;
}
</style>