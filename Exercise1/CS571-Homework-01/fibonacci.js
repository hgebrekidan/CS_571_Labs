const fibonacci = (num) => {
    let fib = 0;
    if(num===0) return 0;
    if(num === 1 || num === 2) return 1;
    
    return fib + fibonacci(num-1) + fibonacci(num-2 );
  };
  
  process.on('message', (num) => {
    const myFibonacci = fibonacci(num);
    process.send(myFibonacci);
    process.exit(1)
  });
  