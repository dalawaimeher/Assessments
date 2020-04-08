
require('app-module-path').addPath(__dirname);

const nodeServer = require('servers/node_server'),
 mongo = require('servers/mongo_server');

nodeServer.server;
mongo.mongoConnection();