<template>
  <div>
    <h1 class="wrapper">{{ pageTitle }}</h1>
    <ul class="wrapper item-grid">
      <li v-for="product in productsByGender" :key="product.id" class="item-grid__item">
        <router-link :to="{ name: 'product', params: { id: product.id}}">
          <img class="product-image" :src="makeImagePath(product)" alt />
          <p class="product-title">{{ product.name }}</p>
          <p>
            <em>${{ product.price }}</em>
          </p>
        </router-link>
      </li>
    </ul>
    <!-- Added in Part 7 - Step 6 -->
    <div class="wrapper random-items-wrapper">
      <h2>Our Recommendations</h2>
      <p>Try these on for size!</p>
      <section class="random-items">
        <router-link
          :to="{ name: 'product', params: { id: randomTop.id}}"
          class="random-items__item"
        >
          <img class="product-image" :src="makeImagePath(randomTop)" alt />
          <p class="product-title">{{ randomTop.name }}</p>
          <p>
            <em>${{ randomTop.price }}</em>
          </p>
        </router-link>
        <router-link
          :to="{ name: 'product', params: { id: randomBottom.id}}"
          class="random-items__item"
        >
          <img class="product-image" :src="makeImagePath(randomBottom)" alt />
          <p class="product-title">{{ randomBottom.name }}</p>
          <p>
            <em>${{ randomBottom.price }}</em>
          </p>
        </router-link>
        <router-link
          :to="{ name: 'product', params: { id: randomFootwear.id}}"
          class="random-items__item"
        >
          <img class="product-image" :src="makeImagePath(randomFootwear)" alt />
          <p class="product-title">{{ randomFootwear.name }}</p>
          <p>
            <em>${{ randomFootwear.price }}</em>
          </p>
        </router-link>
      </section>
      <button class="btn btn--grey" @click="recommendRandomOutfit">Shuffle</button>
    </div>
  </div>
</template>

<script>
import { imagePath } from "@/mixins/imagePath.js";
// Part 7 - Step 7 (what is this for?)
// import { all } from 'q';

export default {
  // Part 7 => name chagnes from "women" to "genderOverview"
  name: "genderOverview",
  mixins: [imagePath],
  // Part 7 - Step 4
  created() {
    // Part 7 - Step 5 first created
    // Because in part 7 - step 7 moved this to "methods" instead
    // this.randomTopId = this.randomProductIdByCategory("Shirts");
    // this.randomBottomId = this.randomProductIdByCategory("Pants");
    // this.randomFootwearId = this.randomProductIdByCategory("Shoes");
    this.recommendRandomOutfit()
  },
  data() {
    return {
      randomTopId: null,
      randomBottomId: null,
      randomFootwearId: null
    };
  },
  computed: {
    gender() {
      return this.$route.params.gender;
    },
    pageTitle() {
      return `${this.gender[0].toUpperCase()}${this.gender.slice(1)}`;
    },
    productsByGender() {
      // (my) Pass gender parameter (i.e. women) to getters and get results from getters
      return this.$store.getters.productsByGender(this.gender);
    },
    // Part 7 - Step5 - to get randomed product information by id
    randomTop() {
      // getters "product" was defined previous part (filter by id and get the product element)
      return this.$store.getters.product(this.randomTopId);
    },
    // Part 7 - Step5 - to get randomed product information by id
    randomBottom() {
      // getters "product" was defined previous part (filter by id and get the product element)
      return this.$store.getters.product(this.randomBottomId);
    },
    // Part 7 - Step5 - to get randomed product information by id
    randomFootwear() {
      // getters "product" was defined previous part (filter by id and get the product element)
      return this.$store.getters.product(this.randomFootwearId);
    }
  },
  // Part 7
  methods: {
    randomProductIdByCategory(category) {
      let allProductsInCategory = this.productsByGender.filter(
        p => p.category === category
      );
      let randomIndex = Math.floor(
        Math.random() * allProductsInCategory.length
      );
      return allProductsInCategory[randomIndex].id;
    },
    recommendRandomOutfit() {
      this.randomTopId = this.randomProductIdByCategory('Shirts')
      this.randomBottomId = this.randomProductIdByCategory('Pants')
      this.randomFootwearId = this.randomProductIdByCategory('Shoes')
    }
  }
};
</script>

<style lang="scss">
.random-items-wrapper {
  background: #fafafa;
  text-align: center;
  padding: 3rem;
}
.random-items {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.random-items__item {
  flex: 0 0 33%;
}
.item-grid {
  list-style: none;
  padding-left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item-grid__item {
  box-sizing: border-box;
  text-align: center;
  padding: 1rem;
  flex: 0 0 33.3%;
  @media only screen and (max-width: 832px) {
    flex: 0 0 50%;
  }
  @media only screen and (max-width: 475px) {
    flex: 0 0 100%;
  }
}
</style>