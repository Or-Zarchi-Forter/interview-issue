const express = require("express");
const queries = require("./queries");

async function createApp() {
  const app = express();

  app.use('/sessions', (req, res) => {
    queries.setSessionInfo('session-id', {importantDetails: 'banana'})
      .then(() => {
        res.status(200).send('success');
      })
      .catch((e)=>{
        res.status(500).send(e.message);
      });
  });

  return app;
}

module.exports = {
  createApp
};
