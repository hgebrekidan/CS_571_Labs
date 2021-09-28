const http = require('http');
const { fork } = require('child_process');
const url  = require('url')
const server = http.createServer();


server.on('request', (req, res) => {
  //  const sum = longComputation();
  //  return res.end(`Sum is ${sum}`);
  const myUrl = url.parse(req.url, true);
  const queryNumber = +(myUrl.query.n);
  if(queryNumber){
      const computeFibonacci = fork('fibonacci.js');
      computeFibonacci.send(queryNumber);
      computeFibonacci.on('message', (fibResult)=>{
          res.end(JSON.stringify({fibonacciResult: fibResult}));
      })
  }
  else{
      res.end('Wrong number input')
  }
  
});

server.listen(3000);
