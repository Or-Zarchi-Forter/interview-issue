const { createClient } = require("./redis-client");
const express = require("express");
const PORT = 8000;

const redisClient = createClient('redis://default:56dtKjrjFitHg2CmgrBDxZaXe9C33tD5@redis-17532.c293.eu-central-1-1.ec2.cloud.redislabs.com:17532');

async function createApp() {
  const app = express();

  app.get('/', (req, res) => {
    redisClient.set('session-key', 'session-data', (err) => {
      if (err) {
        console.error('Redis error', err);
        res.status(500).send(err.message);
        return;
      }

      console.info('Writing session info');
      res.status(200).send('success');
    });
  });

  return app;
}

createApp().then(app => {
  app.listen(PORT, () => {
    console.log(`Access app from: http://localhost:${PORT}`);
  });
});

module.exports = {
  createApp
}
