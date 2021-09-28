Explain Node Event-Loop and the role of each queue, and how we schedule callback functions in the queues? 
- enables the Node.js by operating the non blocking input output operations by offloading operations, even if js is single threaded. In the event loop there are six queues;
a. timers: timer callbacks such as setTimeOut, setInterval,.. are called in this queue
b. pending callbacks: callbacks for some system operations such as TCP errors
c. idle, prepare: It is only used internally
d. Poll: calculates the blocking time in every itration to handle input/output callbacks.
e. Check: handles the callbacks scheduled by setImmediate(), and the callbacks will be executed once the Poll phase becomes idle.
f. Close callbacks: handles callbacks if a socket or handle is closed suddenly and the "close ent will be emitted.
Callback functions are scheduled by their priority such as process.nextTick() will be first then MicroTask queue callbacks(promises) and then check call backs(setImmediate()) and then timer callbacks are processed 
2. Explain the difference between `process.nextTick` and `setImmediate`?
-setImmediate() is provided by Libuv but process.nextTick() provided by Event Loop itself.
-nextTickQueue technically not part of the event loop. And it is processed after each current operation is completed. that is all callbacks passed to process.nextTick() will be resolved before the vent loop continues. process.nextTick has more probabilties of being processed than setImmediate()
3. Name 5 core modules, and 5 global objects from Node.
- Core Modules: http, url, querystring, path, fs
- Global Objects: console, module, process, require(),exports