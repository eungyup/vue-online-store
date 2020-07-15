<template>
  <div>
    <section class="wrapper">
      <div class="flex-col">
        <!-- <img  class="flex-col--2" :src="imagePath(product)" alt=""> -->
        <!-- (my) for reusable methods -> mixins -->
        <img  class="flex-col--2" :src="makeImagePath(product)" alt="">
        <div class="flex-col--2" >
          <h2>{{ product.name }}</h2>
          <!-- Added Part 4 -->
          <button @click="addToCart" class="btn btn--grey">Add to Cart</button>
          <p>Price: ${{ product.price }}</p>
          <p>Size: {{ product.size }}</p>
          <p>Color: {{ product.color }}</p>
          <p><em>{{ product.quantity }} left in stock</em></p>
          <h3>Details</h3>
          <ul>
            <li>Material: {{ product.details.material }}</li>
            <li>Fit: {{ product.details.fit }}</li>
            <li>Maintenance: {{ product.details.maintenance }}</li>
            <li v-if="product.details.additional">Additional: {{ product.details.additional }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// (my) for reusable methods -> mixins
import {imagePath} from '../mixins/imagePath.js'

export default {
    name: 'product',
    mixins: [imagePath],
    data() {
        return {
            product: this.$store.getters.product(this.$route.params.id)
        }
    },
    // (my) for reusable methods -> mixins
//   methods: {
//     imagePath(product) {
//       return require(`../assets/img/products/${product.images[0]}`);
//     }
//   }
    methods: {
      addToCart(){
        this.$store.dispatch('addToCart', this.$route.params.id)
      }
    }
};
</script>

<style lang="scss">
.flex-col {
  display: flex;
  align-items: flex-start;
}
.flex-col--2 {
  width: 50%;
}
// Added in Part 4
.btn {
  padding: .5rem .75rem;
  border-radius: 3px;
  border: none;
  background-color: transparent;
  font-size: .9rem;
  font-weight: bold;
  cursor: pointer;
  transition: all .15s ease;
}
.btn--grey {
  background-color: #2c3e50;
  color: #FFF;
  &:hover, &:focus {
    background-color: #42b983;
  }
}
</style>
