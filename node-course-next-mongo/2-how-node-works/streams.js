const server = require("http").createServer();
const fs = require("fs");

server.on("request", (req, res) => {
  // Fisrt solution

<<<<<<< HEAD
  // Solution 3
  const stream = fs.createReadStream("test-file.txt");
  stream.pipe(res);
  // readableSoruce.pipe(writeableDest )
=======
  fs.readFile("test-file.txt", (err, data) => {
    if (err) console.log(err);

    res.end(data);
  });
>>>>>>> parent of 756d3fe (How models and exports works on node)
});

server.listen("8000", "127.0.0.1", () => {
  console.log("server is listening ....");
});
