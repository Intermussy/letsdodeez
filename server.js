const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;

process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);