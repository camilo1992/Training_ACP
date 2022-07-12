const fs = require("fs");
const superagent = require("superagent");

// new f that returns a promisses in order to chain responses and avoid callback hell
const readFile = (fileName) => {
  return new Promise((resolves, rejects) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) rejects(" I coudl not find  file");
      resolves(data);
    });
  });
};

// new f that returns a promisses in order to chain responses and avoid callback hell
const writeFile = (location, file) => {
  return new Promise((resolves, rejects) => {
    fs.writeFile(location, file, (err) => {
      if (err) return rejects(err.message);
      console.log("Image saved");
      resolves("success");
    });
  });
};

// ------------------------  Async / await ----------------------

const fetchDogPic = async () => {
  try {
    const dog = await readFile(`${__dirname}/dog.txt`);
    console.log(dog);
    const data = await superagent.get(
      `https://dog.ceo/api/breed/${dog}/images/random`
    );

    console.log(data.body.message);
    await writeFile("./random-dog-images.txt", data.body.message);
  } catch (err) {
    console.log(err);
  }
};

fetchDogPic();
// ------------------------  Method chainning ----------------------

// readFile(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log(data);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((res) => {
//     // i want to write the responde into a file
//     console.log(res.body.message);
//     writeFile("./random-dog-images.txt", res.body.message);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// --------------------- BAD PRACTICE -----------------------
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   if (err) return console.log("there is not data");

//   console.log(`breed ----> ${data}`);

//   // there are many different ways of calling http request in this case superagent was used
//   // node has differetn modules menat to do this
//   superagent

//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then((res) => {
//       fs.writeFile("./random-dog-images.txt", res.body.message, (err) => {
//         console.log("Image saved");
//       });
//     })
//     .catch((err) => {
//       console.log("errooooooooor");
//       console.log(err.message);
//     });
// });
