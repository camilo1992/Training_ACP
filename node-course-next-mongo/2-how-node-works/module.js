// module exports
const C = new require("./test-module-1");
const calculator = new C();
console.log(calculator.add(2, 2));

// Exports
// const calculatro2 = require("./test-module-2");
const { add, multiply, divide } = require("./test-module-2");
console.log(add(3, 3));

//Caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
