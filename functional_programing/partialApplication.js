const greetings = R.curry((greet, name) => `${greet}, ${name}`);
const goodMorningFunction = greetings("Good morning");
console.log(greetings("gDay", "camiloooooo"));
const friends = ["Camilo", "Juan", "Felipe"];
console.log(friends.map(goodMorningFunction));
