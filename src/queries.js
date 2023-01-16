const {createClient} = require('./redis-client');

const redisClient = createClient('redis://:LhfsPHDZbAIFYsaiueTztX4IWY9veo9H@redis-16954.c135.eu-central-1-1.ec2.cloud.redislabs.com:16954');

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
