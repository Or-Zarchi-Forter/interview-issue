const {createClient} = require('./redis-client');

const redisClient = createClient('redis://default:56dtKjrjFitHg2CmgrBDxZaXe9C33tD5@redis-17532.c293.eu-central-1-1.ec2.cloud.redislabs.com:17532');

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
