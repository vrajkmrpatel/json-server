const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("data.json");
const middleware = jsonServer.defaults();
const port = process.env.PORT || 8000;

server.use(middleware);
server.use(router)

server.listen(port);