const greetings = R.curry((greet, name) => `${greet}, ${name}`);
const goodMorningFunction = greetings("Good morning");

// This is the syntaxis that Rambda allow 
//us to use in order to write functional programing

// we have access to R obj which stores different f()
// It basically allow JS to write F() in a more readable way since JS is not fully functional.

console.log(greetings("gDay", "camiloooooo"));
const friends = ["Camilo", "Juan", "Felipe"];
console.log(friends.map(goodMorningFunction));



