const fs = require("fs");
const http = require("http");
const url = require("url");
const replaceCards = require("./modules/replaceCards");

//------------- Blocking single thread code ------> synchronous
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
//console.log(textIn);

const textOut = `This is what we know about avocado: ${textIn}.n\ Created on date ${Date.now()}´`;

fs.writeFileSync("./txt/output.txt", textOut);
//console.log("File written!");

//---------------------Non-Blocking  code ------> Asynchronous

fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data2) => {
    //  console.log(data2);
    fs.readFile(`./txt/read-this.txt`, "utf-8", (err, data3) => {
      //console.log(data3);
      fs.writeFile("./txt/final.txt", `${data}n\ ${data3}`, "utf-8", (err) => {
        //    console.log("your file was written");
      });
    });
  });
});

//console.log("Will execute");
// ----------------   create server

const data = fs.readFileSync("./dev-data/data.json", "utf-8");
const tempOverview = fs.readFileSync("./templates/overview.html", "utf-8");
const tempProduct = fs.readFileSync("./templates/product.html", "utf-8");
const tempProductCards = fs.readFileSync(
  "./templates/templet-cards.html",
  "utf-8"
);

const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  //console.log(url.parse(req.url, true));
  console.log(query);

  // ---------------- overview
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });

    const productsHtml = dataObj
      .map((el) => replaceCards(tempProductCards, el))
      .join("");

    const output = tempOverview.replace(/{%CARDS%}/g, productsHtml);
    res.end(output);
  } else if (pathname === "/product") {
    // ---------------- // product

    res.writeHead(200, {
      "Content-type": "text/html",
    });

    const product = dataObj.filter((el) => +el.id === +query.id);

    console.log(product, query.id);
    const output = replaceCards(tempProduct, product[0]);
    console.log(output);

    res.end(output);
  } else if (pathname === "/api") {
    // ---------------- // api
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(data);
  } else {
    // // ---------------- not found
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.writeHead(404);
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
