/// without ramda....
const sentence1 = "esdfasdfa asdf dsafasdf asdfa sdfsd fasfasdf asdf";
const newF = sentence1.split(" ");
//console.log(newF);
//console.log(newF.length);

const ramdaUse = R.split(" ", sentence1);
const wordCount = R.length(ramdaUse);

//console.log(ramdaUse);
//console.log(wordCount);

// Count how many digits there are in the following
// sentence, using functional composition

// NOTE: If you get stuck, you can get some hints from
// the following jsbin:
// https://jsbin.com/jokefus/2/edit?js,console
// my solution is here: https://jsbin.com/duxewec/1/edit?js,console

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const sentence =
  "PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).";

const joinSplitWordsIntoAnArray = (groupOfArrays) => [...groupOfArrays.flat()];

const findDigits = (splitedAgain) =>
  splitedAgain.filter((word) => {
    for (let i = 0; i < numbers.length; i++) {
      if (word === numbers[i]) return word;
    }
  });

const countDigits = R.compose(
  R.length,
  findDigits,
  joinSplitWordsIntoAnArray,
  R.split("")
);
console.log(countDigits(sentence));
