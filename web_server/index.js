const http = require("http");

const PORT = 3000;

const friends = [
  {
    id: 1,
    name: "something",
  },
  {
    id: 2,
    name: "something2",
  },
];

const server = http.createServer((req, res) => {
  const item = req.url.split("/");
  if (item[1] === "friends") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    if (item.length === 3) {
      const friendIndex = Number(item[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (item[1] === "/messages") {
    res.write("<html>");
    res.write("<body>");
    res.write("<h1><p> This is an example </p></h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log("Listening on port 3000");
});
