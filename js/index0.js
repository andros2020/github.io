document.addEventListener("DOMContentLoaded", function() {
	console.log("JavaScript is running...");
	
var h1 = document.querySelector('h1');
h1.addEventListener('click', handleClick);
function handleClick (event) {
    // do something!
	console.log(this);
	console.log(event);
	console.log(event.target.id);
	console.log(event.target.className);
	console.log(event.target.classList[0]);
	console.log(event.target.classList.length);



};	
	
	
	
	
	
	
	
}, false);