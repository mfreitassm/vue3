app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img v-bind:src="image" alt="product image" />
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p> <p style="color: red" v-if="onSale"> On Sale! </p>
            <p>Shipping: {{ shipping }}</p>
            <a :href="url"> See More</a>
            <p v-if="inStock > 10">In Stock</p>
            <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out!</p>
            <p v-else>Out of Stock</p>

            <product-details :details="details"></product-details>

            <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style=" { backgroundColor: variant.color}"></div>
            <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="addToCart">Add to Cart</button>
            <button class="button" @click="removeFromCart">Remove Item</button>
            <!-- <ul>
                <li v-for="size in sizes">{{ size }}</li>
              </ul> -->
          </div>
        </div>
      </div>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
    </div>`,

  data() {
    return {
      product: "Socks",
      description: "Maximum Cushion Ankle Running Socks",
      //image: "./assets/images/socks_green.jpg",
      url: "./assets/images/socks_green.jpg",
      brand: "Mastery",
      selectedVariant: 0,
      inventory: 10,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg", quantity: 50, onSale: false },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 0, onSale: true },
      ],
      sizes: ["Small", "Medium", "Large", "Extra Large"],
      reviews: [],
    };
  },
  methods: {
    // updateImage(variantImage) {
    //   this.image = variantImage;
    // },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      this.$emit("remove-from-cart", this.variants[this.selectedVariant].id);
    },
    addReview(review) {
      this.reviews.push(review);
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    onSale() {
      return this.variants[this.selectedVariant].onSale;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});
