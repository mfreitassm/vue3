const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    addToCart(id) {
      //this.cart += 1;
      this.cart.push(id);
    },
    removeFromCart(id) {
      //this.cart -= 1;
      const index = this.cart.indexOf(id);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },
  },
});
