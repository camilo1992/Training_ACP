const greet = (name) => {
  return (greet) => {
    return `${greet}, ${name}`;
  };
};

const friends = ["Camilo", "Juan", "Felipe"];

const friendGreetings = friends.map(greet("gooday"));
console.log(friendGreetings);
