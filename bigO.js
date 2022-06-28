function bigO(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      //console.log(i, j);
    }
  }
}

// Big0 notation
//bigO(9);

//bigO(3);
// 02n) => 0(n)
// I n this case we run the code n + n = 2n
// It is noted 2n.However, we DROP CONSTANTS in bigo
// so it is not a 0(2n) ... it actually is 0(n).

bigO(10);
//Nested loops
// 0(n2) === 0(n3)
// graphoically we see why it is not efficient...
// and why both of them are at the end similar

//Big O in Arrays

// push and pop

const myArray = [1, 2, 3, 4, 5, 6];
// There is an index that points at every position in the array.
// if

myArray.push(44);
console.log(myArray);
myArray.pop();
console.log(myArray);
// When we push or pop an item from a n Array we do not need to reSet index
// therefore, the operation is less expensive

// Howwever, when we shift or unshift and element in a Array
// All the indexes need to be reconfigured ... making it an expensive operation

myArray.shift();
console.log(myArray);
myArray.unshift(1);
console.log(myArray);
