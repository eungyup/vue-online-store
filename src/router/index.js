import Vue from "vue";
import VueRouter from "vue-router";
// (my) Part 3 -> Nathan is using "Router" instead of "VueRouter"
// import Router from "vue-router";
import Home from "../views/Home.vue";
// (my) Added in Part 3
import Product from "../views/Product.vue";
// (my) Added in Part 4
import Cart from "../views/Cart.vue"
// (my) Added in Part 6
import GenderOverview from "../views/GenderOverview.vue"

// (my) VueRouter -> plugin
Vue.use(VueRouter);
// (my) Nathan is using below
// Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  // Part 3 added
  {
    path:"/product/:id",
    name:"product",
    component: Product
  },
  // Part 4 -> add cart but remove "about"
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  // Part 5 added
  {
    path: "/:gender",
    name: "gender-overview",
    component: GenderOverview
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

// (my) Nathan is using export defult new Router
// export default new Router({
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: Home
//     },
//     // (my) Part 3 added
//     {
//       path:"/product/:id",
//       name:"product",
//       component: Product,
//     },
//     {
//       path: "/about",
//       name: "about",
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () =>
//         import(/* webpackChunkName: "about" */ "../views/About.vue")
//     }
//   ]
// })


