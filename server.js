const JSONServer = require('json-server');

const server = JSONServer.create();
const router = JSONServer.router('db/db.json');
const middlewares = JSONServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);

server.listen(port);
