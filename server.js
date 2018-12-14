
const app = require("./backend/app");
const http = require('http');

const hostname = 'localhost';
const port = process.env.PORT || "27017";

app.set("port", port);

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
