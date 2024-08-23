 In JavaScript, an EventEmitter is a class that allows objects to handle and respond to events. It is a core feature in Node.js and is commonly used for asynchronous programming. An EventEmitter can emit named events and register listeners that will be invoked when those events are emitted. 
Here is the custom Event Emitter I created and has the following methods: 

Method: addEventListener(eventName, fn)
Registers a new listener function (fn) for a specified event (eventName). Throws an error if fn is not a function.

Method: removeEventListener(eventName, fn)
 Removes a specified listener function from an event. Throws an error if fn is not a function.

Method: removeAllEventListeners(eventName)
 Removes all listeners for a specified event. Warns if no listeners are found.

Method: once(eventName, fn)
 Registers a listener that will be invoked only once for the specified event.

Method: emit(eventName, ...args)
 Triggers all registered listeners for a specified event, passing any additional arguments. Warns if no listeners are found.

Method: listenerCount(eventName)
 Returns the number of listeners registered for a specified event. Warns if no listeners are found.

Method: rawListeners(eventName)
 Returns a list of all listeners registered for a specified event.

Methods: process1(), process2(), process3(), and process4()
These methods simulate various asynchronous operations, such as network requests and file reading. Upon completion, they emit specific events to notify registered listeners with relevant data.
