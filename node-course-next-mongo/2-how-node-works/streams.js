const server = require("http").createServer();
const fs = require("fs");

server.on("request", (req, res) => {
  // Fisrt solution
  // Since tehe txt file is too large it consumes too mucha memory breaking node and the process of data
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  // Second solution
  // we have to listen to 3 differten events
  // the Incomming data
  // the end of the recieving data
  // the error
  //   However, ther is a flaw when ussing this soslution... since the speed of recievinf tha data is
  // greater thatn the response´s speed and cause a back preassure conflict..
  // Therefore we need to handle streaming in a different way
  // const stream = fs.createReadStream("test-fil.txt");
  //   stream.on("data", (chunk) => {
  //     res.write(chunk);
  //     res.end();
  //   });
  //   stream.on("end", () => {
  //     res.end();
  //   });
  //   stream.on("error", (err) => {
  //     res.statusCode = 404;
  //     res.end("file not foun d");
  //   });

  // Solution 3
  const stream = fs.createReadStream("test-file.txt");
  stream.pipe(res);
  // readableSoruce.pipe(writeableDest)
});

server.listen("8000", "127.0.0.1", () => {
  console.log("server is listening ....");
});
