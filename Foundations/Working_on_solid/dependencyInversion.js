// --------------------------   bad practice ---------------------
// High level module
class ProductRepository {
  getAllProducts() {
    return new sqlProductRepository();
  }
}

// Low level module
class sqlProductRepository {
  getProductList() {
    return {};
  }
}

// ------------ good practice -------------

const retrieveSqldata = (slection) => {
  // Retrieve a data structure and return it depending on the selection 
  return [];
};
// The paremeter selection diccouple abstractions from details and instead 
// details depend on abstractions ?
// Where would we  store this function ..... ?





// Is this the way of meeting the first rule ?
// high level modules should not depend on low level modules ? ....
// both sould depend on abstractions....
class ProductRepository2 {
  getAllProducts(slelection) {
    retrieveSqldata(slelection)
  }
}
// This would be a solution in case we only had to retrieve data from a single class o module.

class ProvideSqlData {
  retriveDataBaseList(slelection) {
    retrieveSqldata(slelection);
  }

  SomethingMore() {
    // Does something more
  }
}







