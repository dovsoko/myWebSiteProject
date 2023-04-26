new Vue({
    el: '#app',
data() {
  return {
    cheesePizzaCount: 0,
    toppingPizzaCount: 0,
    salamiPizzaCount: 0,
    smallFriesCount: 0,
    medFriesCount: 0,
    potatoeBurekasCount: 0,
    smallMBSoupCount: 0,
    medMBSoupCount: 0,
    smallPSoupCount: 0,
    medPSoupCount: 0,
  };
},
computed: {
  total() {
    console.log('Calculating total');
    // Calculate total based on item prices
    return this.cheesePizzaCount * 18 + this.toppingPizzaCount * 20 + this.salamiPizzaCount * 20 + this.smallFriesCount * 1 +
     this.medFriesCount * 2 + this.potatoeBurekasCount * 5 + this.smallMBSoupCount * 3 + this.medMBSoupCount * 4 + this.smallPSoupCount * 3 + this.medPSoupCount * 4;
  },
  styles() {
    return {
      color: this.total > 0 ? 'black' : 'red',
    };
  },
},

methods: {
placeOrder() {
  console.log('Place order button clicked');
  // Emit an event to the parent component
  this.$emit('placeOrder', this.total);

  // Show a pop-up with the total cost
  alert(`Your order total is $${this.total}. Thank you for your order!`);
},
},
});
