const product = {
  name: "pen",
  price: 50.00,
  showDetails() {
    console.log(this.name, this.price);
  }
};

product.showDetails();