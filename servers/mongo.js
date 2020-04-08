
const mongoose = require('mongoose');



exports.mongoConnection = function () {
    let connection_uri = '';
    if(config.database.mongo.username && config.database.mongo.password) {
        connection_uri = `mongodb://${config.database.mongo.username}:${config.database.mongo.password}@${config.database.mongo.host}:${config.database.mongo.port}/${config.database.mongo.name}?authSource=admin`;
       
    } else {
        connection_uri = `mongodb://${config.database.mongo.host}:${config.database.mongo.port}/${config.database.mongo.name}`;
        
    }
    mongoose.connect(connection_uri);


    mongoose.connection.on('connected', function () {
        
    });

};