const server = require("http").createServer();
const fs = require("fs");

server.on("request", (req, res) => {
  // Fisrt solution

  fs.readFile("test-file.txt", (err, data) => {
    if (err) console.log(err);

    res.end(data);
  });
});

server.listen("8000", "127.0.0.1", () => {
  console.log("server is listening ....");
});
