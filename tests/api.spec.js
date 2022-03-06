const request = require('supertest')
const {createApp} = require("../src/express-app");

describe("get /sessions", () => {
  it("when requested", async () => {
    const app = await createApp();
    const response = await request(app).get("/sessions");
    if (response.status !== 200){
      throw new Error(response.text);
    }
  })
})
