class Product {
  discount = 20;

  getDiscount() {
    return this.discount;
  }
}

class inhouseProduct extends Product {
  getDiscount() {
    this.apllyExtraDiscount();
  }

  apllyExtraDiscount() {
    this.discount = this.discount * 1.5;
    return this.discount;
  }
}

class PricingUtils {
  proudc1 = new Product();
  proudc2 = new Product();
  proudc3 = new inhouseProduct();
  productList = [];

  newList() {
    this.productList.push(this.proudc1);
    this.productList.push(this.proudc2);
    this.productList.push(this.proudc3);
  }

  constructor() {
    this.newList();
    
    for (let i = 0; i <= this.newList.length; i++) {
      console.log(this.newList[i].getDiscount());
    }
  }
}