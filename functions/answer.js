var bcrypt = require('bcryptjs');

exports.handler = function(event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: 'Hello, World',
    });
};
