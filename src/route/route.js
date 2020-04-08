
const Controller = require('src/controller/controller');

module.exports = [
   
    { method: 'POST', path: '/v1/message', config: Controller.postMessage },
    { method: 'GET', path: '/v1/message/{uid}', config: Controller.getMessage }
]