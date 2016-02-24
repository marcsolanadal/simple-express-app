var redis = require('redis');

var options = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
};

var rcli = redis.createClient(options);

rcli.on('ready', function() {
  console.log('Redis connected to ' + options.host + ':' + options.port);
});

rcli.on('error', function(err) {
  console.error(err);
});

module.exports = rcli;
