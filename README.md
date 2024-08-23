 In JavaScript, an EventEmitter is a class that allows objects to handle and respond to events. It is a core feature in Node.js and is commonly used for asynchronous programming. An EventEmitter can emit named events and register listeners that will be invoked when those events are emitted. <br>
Here is the custom Event Emitter I created and has the following methods: 
<ul>

<li>
 <b>addEventListener(eventName, fn)</b> <br>
Registers a new listener function (fn) for a specified event (eventName). Throws an error if fn is not a function.
</li>

<li>
<b>removeEventListener(eventName, fn) </b> 
<br>
 Removes a specified listener function from an event. Throws an error if fn is not a function.
</li>
<li>
<b>on(eventName, fn) </b> 
<br>
 Registers a callback to the master object
</li>


<li>
<b>removeAllEventListeners(eventName)</b> <br>
 Removes all listeners for a specified event. Warns if no listeners are found.
</li>

<li>
<b>once(eventName, fn) </b> <br>
 Registers a listener that will be invoked only once for the specified event.
</li>

<li>
<b> emit(eventName, ...args)</b> <br>
 Triggers all registered listeners for a specified event, passing any additional arguments. Warns if no listeners are found.
</li>

<li>
<b>listenerCount(eventName)</b> <br>
 Returns the number of listeners registered for a specified event. Warns if no listeners are found.
</li>

<li>
<b>rawListeners(eventName)</b> <br>
 Returns a list of all listeners registered for a specified event.
</li>
<li>
<b> process1(), process2(), process3(), and process4() </b> <br>
These methods simulate various asynchronous operations, such as network requests and file reading. Upon completion, they emit specific events to notify registered listeners with relevant data.
</li>
</ul>
