const {createClient} = require('./redis-client');

const redisClient = createClient('redis://:qHQjRbACvRUNudRUDEEWp88lxx8vKs2C@redis-15160.c135.eu-central-1-1.ec2.cloud.redislabs.com:15160');

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
