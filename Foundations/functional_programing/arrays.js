// 1. create a constant named friends,
// which is an array that contains 2
// names of your choosing.

const friends = ["camilo", "juan"];
console.log(friends);
// 2. Create a new constant named updatedFriends,
// which includes the friends array values plus
// one additional name

const updatedFriends = [...friends, "gustavo"];
console.log(updatedFriends);
// 3. Create a new constant named friendNameLengths,
// which is based on the array updatedFriends,
// but instead of having the friends names,
// have the array store the length of each persons name.

const friendNameLengths = updatedFriends.map((name) => name.length);
console.log(friendNameLengths);
// 4. Create a new constant named shorterNamedFriends,
// which will be a list of the friends except the friend with the longest name.

const calcLonggest = (arr) => {
  let longestName;
  if (!arr.length || arr.length === 1) return;
  let top = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (top > arr[i]) {
      longestName = top;
    } else {
      longestName = arr[i];
    }
  }
  return longestName;
};

let longgestName = calcLonggest(friendNameLengths);

const shorterNamedFriends = updatedFriends.filter(
  (name) => name.length !== longgestName
);
console.log(shorterNamedFriends);

// 5. Print each variable to the console.

// Solution can be seen at:
// https://jsbin.com/nevonet/1/edit?js,console
