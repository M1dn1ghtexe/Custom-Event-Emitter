const fs=require('fs')

module.exports=class EventEmitter{

	listeners={}

	addEventListener(eventName,fn){
		if(typeof fn !== 'function'){
			throw  new Error('Listener must be a function !')
		}
		this.listeners[eventName]=this.listeners[eventName] || [] 
		if(!this.listeners[eventName].includes(fn)){
			this.listeners[eventName].push(fn)
		}
	
		return this;

	}
	removeEventListener(eventName,fn){
		if( typeof fn !== 'function'){
			throw new Error('Listener must be a function !')
		}
		let arr=this.listeners[eventName]
		if(!arr){
			return this
		}
		let i=arr.length-1 
		while (i>=0) {
			if(arr[i]===fn){
				arr.splice(i,1)
				break
			}
		
			i--
		}
		return this
	}
	removeAllEventListeners(eventName){
		
		if(this.listeners[eventName]){
			delete this.listeners[eventName]
		}
		else{
			console.warn('No listeneres found for event'+' '+eventName)
			return this
		}
		
	}

	on(eventName,fn){

		if(typeof fn !=='function'){
			throw new Error('Listener must be a function !')
		}
		if(typeof eventName !=='string'){
			throw new Error('Event must be a string')
		}

		this.addEventListener(eventName,fn)
	}
	emit(eventName,...args){
		if(typeof eventName !=='string'){
			throw new Error('Event must be a string')
		}
		let fns=this.listeners[eventName] 
		if(!fns){
			console.warn('Warning: No listeners found for this event')
			return false
		}
		

		fns.forEach(f => {

			f(...args)

		});
		return true
	}
	once(eventName,fn){

		this.listeners[eventName]=this.listeners[eventName] || [] 
		const wrapper=(...args)=>{

			fn(...args)
			this.removeEventListener(eventName,wrapper)
		}
		this.listeners[eventName].push(wrapper)

	}
	listenerCount(eventName){
		if(!this.listeners[eventName]){
			console.warn('No listeners found for event'+' '+eventName)
			return false
		}
		let fns=this.listeners(eventName) 
		return fns.length
	}
	rawListeners(eventName){
		return this.listeners[eventName] || []
	}

	

	async process1 (){

		// suppose this object  is starting to do internal work
		const res=await this.#networkRequestSimulation()
		//after the work is done in another thread and we get the result, we emit an custom event 'snacks' 
		
		 this.emit('snacks',res)
		 // this emitting will trigger our callback function the callback function that i registered in the on function 
		 
	}
	async process2(){
		//this is the same as process1 , just imagine a different server , or a different request 
		const res=await this.#networkRequestSimulation2()

		this.emit('cookies',res)
	}
	async process3(){
		//suppose we want to read a file 
		console.log('hi');
		
		
		fs.readFile('./exampleFile.txt','utf-8',(err,data)=>{
			if(err){
				console.log('An error occured reading the file');
				return
			}
			this.emit('fileRead',data)
		})
	}
	 process4(){

		this.emit('soda',{name:'Harry Potter'})
	 }

	async #networkRequestSimulation(){
		// im using a settimeout to simulate a network request 

		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({
					name: 'John',
					occupation: 'programmer',
					age: 26
				});
			}, 3000);
		});
	}
	async #networkRequestSimulation2(){

		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({
					name: 'Mike',
					occupation: 'senior programmer',
					age: 35 ,
					skillLevel:'expert'
				});
			}, 2000);
		});
	}

}


