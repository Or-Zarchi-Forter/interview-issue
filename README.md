# Instructions:

- Clone the project
- Install all dependencies with `npm install`

# The bug
When running the project with `npm start` and navigating to http://localhost:8000, we get a successful reply.
We can examine the logs and see that something is written to redis.

However, if we run the command `npm test` a test will run that tries to perform the same request, the request fails.
The test has no issues - it's discovering a real bug.

Find the bug, and make the test pass
