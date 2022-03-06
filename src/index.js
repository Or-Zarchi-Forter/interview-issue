const {createApp} = require("./express-app");
const PORT = 8000;

createApp().then(app => {
  app.listen(PORT, () => {
    console.log(`Access app from: http://localhost:${PORT}`);
  });
});

