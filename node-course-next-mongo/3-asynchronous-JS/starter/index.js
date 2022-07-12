const fs = require("fs");
const superagent = require("superagent");

const readFile = (fileName) => {
  return new Promise((resolves, rejects) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) rejects(" I coudl not find  file");
      resolves(data);
    });
  });
};

const writeFile = (location, file) => {
  return new Promise((resolves, rejects) => {
    fs.writeFile(location, file, (err) => {
      if (err) return rejects(err.message);
      console.log("Image saved");
      resolves("success");
    });
  });
};

readFile(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(data);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    // i want to write the responde into a file
    console.log(res.body.message);
    writeFile("./random-dog-images.txt", res.body.message);
  })
  .catch((err) => {
    console.log(err);
  });

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
