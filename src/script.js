function cartApp() {
    return {
      items: [
        { id: 1, name: 'Waffle with Berries', prices: "$6.50", price: 6.50, image: 'image-waffle-mobile.jpg', images: 'image-waffle-desktop.jpg', inCart: false, quantity: 0, specify: 'Waffle' },
        { id: 2, name: 'Vanilla Bean Crème Brûlée', prices: "$7.00", price: 7.00, image: 'image-creme-brulee-mobile.jpg', images: 'image-creme-brulee-desktop.jpg', inCart: false, quantity: 0, specify: 'Creme Brulee' },
        { id: 3, name: 'Macaron Mix of Five', prices: "$8.00", price: 8.00, image: 'image-macaron-mobile.jpg', images: 'image-macaron-desktop.jpg', inCart: false, quantity: 0, specify: 'Macaron' },
        { id: 4, name: 'Classic Tiramisu', prices: "$5.50", price: 5.50, image: 'image-tiramisu-mobile.jpg', images: 'image-tiramisu-desktop.jpg', inCart: false, quantity: 0, specify: 'Tiramisu' },
        { id: 5, name: 'Pistachio Baklava', prices: "$4.00", price: 4.00, image: 'image-baklava-mobile.jpg', images: 'image-baklava-desktop.jpg', inCart: false, quantity: 0, specify: 'Baklava' },
        { id: 6, name: 'Lemon Meringue Pie', prices: "$5.00", price: 5.00, image: 'image-meringue-mobile.jpg', images: 'image-meringue-desktop.jpg', inCart: false, quantity: 0, specify: 'Pie' },
        { id: 7, name: 'Red Velvet Cake', prices: "$4.50", price: 4.50, image: 'image-cake-mobile.jpg', images: 'image-cake-desktop.jpg', inCart: false, quantity: 0, specify: 'Cake' },
        { id: 8, name: 'Salted Caramel Brownie', prices: "$5.50", price: 5.50, image: 'image-brownie-mobile.jpg', images: 'image-brownie-desktop.jpg', inCart: false, quantity: 0, specify: 'Brownie' },
        { id: 9, name: 'Vanilla Panna Cotta', prices: "$6.50", price: 6.50, image: 'image-panna-cotta-mobile.jpg', images: 'image-panna-cotta-desktop.jpg', inCart: false, quantity: 0, specify: 'Panna Cotta' }
      ],
      cart: [],
      orderConfirmed: false,

      addToCart(item) {
        item.inCart = true;
        item.quantity = 1;
        this.cart.push(item);
      },

      imageBorder() {
        document.getElementById("imagess").style.borderColor = "red";
      },

      increaseQuantity(item) {
        item.quantity++;
      },

      decreaseQuantity(item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.removeFromCart(item);
        }
      },

      removeFromCart(item) {
        item.inCart = false;
        item.quantity = 0;
        this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
      },

      get cartTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      },

      confirmOrder() {
        this.orderConfirmed = true;
      },

      startNewOrder() {
        this.cart.forEach(item => {
          item.inCart = false;
          item.quantity = 0;
        });
        this.cart = [];
        this.orderConfirmed = false;
      },
    };
  }