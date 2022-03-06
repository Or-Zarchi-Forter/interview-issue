const {createClient} = require('./redis-client');

const redisClient = createClient('redis://:0GpiRJI6MOeomPvzJ5AnMVd858q0ciIs@redis-17799.c55.eu-central-1-1.ec2.cloud.redislabs.com:17799');

const setSessionInfo = async (sessionId, sessionDetails) => {
  return new Promise((resolve, reject) => {
    redisClient.set(`rowKey:${sessionId}`, JSON.stringify(sessionDetails), (err, reply) => {
      if (err) {
        console.error('Redis error', err);
        reject(err);
      }

      console.info('Writing session info');
      resolve(reply);
    });
  });
};

module.exports = {
  setSessionInfo
};
