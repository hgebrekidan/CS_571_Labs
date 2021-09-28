# CS571-Homework-01
## Written Exercises
1. Explain Node Event-Loop and the role of each queue, and how we schedule callback functions in the queues? 
2. Explain the difference between `process.nextTick` and `setImmediate`?
3. Name 5 core modules, and 5 global objects from Node.
  
## Coding Exercise
* Create an Express web server that receives a `GET` request to `/fib`. This route will receive a number passed in the request as query parameter as following: `http://localhost:3000/fib?n=5` and returns a `JSON` object contains the Fibonacci number of `n`.
* Write a middleware to validate that the users are passing `n` as query parameter and the value is a valid `number`. (Feel free to use any validation third-party middleware, or write your own)
  
**Example**: `/fib?n=10` should return a `JSON` object: `{fib: 55}`  
  
**Note:** Calculating Fibonacci is considered an intense CPU work, design your code so it does not block the main event-loop of the master process. 

**Note: Add `node_modules` folder to your `.gitignore` file. You should only push your code along with `package.json` and `package-lock.json`**
