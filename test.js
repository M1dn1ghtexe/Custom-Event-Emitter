const eventemit=require('./events')

const events=new eventemit()

events.on('snacks',(data)=>{
	console.log('callback function'+' '+ JSON.stringify(data));
	
})
events.on('cookies',(data)=>{
	console.log('callback function with data'+' '+JSON.stringify(data))
})

events.on('fileRead',(data)=>{

	// now i can do whatever i  want with this data
	console.log('callback function reading file finished'+" "+data);
	
})
events.once('soda',(data)=>{
	console.log('event emitted once'+' '+JSON.stringify(data));
	
})


//process1 does some work internally in the events object ( in this case simulating a network request)
events.process1()
//process2 does the same work as process 1
events.process2()
//process3 reads a sequence of bytes from the file system and when it's finished emits the fileRead event , which will trigger our callback
//because we registered a callback with events.on('fileRead'...)
events.process3()
// the callback we registered with the 'soda' event should execute once, the second and third request to process4( which is emitting soda event again)
// will get ignored
events.process4()
events.process4()
events.process4()


