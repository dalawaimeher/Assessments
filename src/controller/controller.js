

const Validation = require('src/validations/validation');




exports. postMessage = {
description: 'add message to db',
notes: 'add message to db',
plugins: {
    'hapi-swagger': {
        responses: {
            '200': { 'description': 'Success' },
            '400': { 'description': 'Bad Request' },
            '401': { 'description': 'Invalid credentials' },
            '500': { 'description': 'Exception at server side' } } },
            "hapi-ratelimit": {
                limit: 2, 
                duration: 10 //limits to 2 hits per 10sec on a specific route
              } 
        },
validate : Validation.postMessage,
auth : 'simple',
handler : (request, reply) => {
  factory.postMessage(request,reply);   
}
};

exports. getMessage = {
    description: 'add message to db',
    notes: 'add message to db',
    plugins: {
        'hapi-swagger': {
            responses: {
                '200': { 'description': 'Success' },
                '400': { 'description': 'Bad Request' },
                '401': { 'description': 'Invalid credentials' },
                '500': { 'description': 'Exception at server side' } } },
               
            },
    validate : Validation.getMessage,
    auth : 'simple',
    handler : (request, reply) => {
      factory.getMessage(request,reply);   
    }
    };