document.addEventListener("DOMContentLoaded", function() {
	console.log("JavaScript is running...");
	
	document.getElementById('absatz1').innerHTML = new Date().toDateString();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/* 	document.getElementsByTagName('p')["p2"].addEventListener('click',
			function(event) {
				alert('You clicked the element ' + this.tagName);
			}
		); */
	/* document.getElementsByName("p2")[0].addEventListener('click',
		function(event) {
			alert('You clicked the element ' + this.tagName);
		}
	); */
	
	// document.getEle
	
	// document.getElementById("myCheck").disabled = true;
	
	/* var body = document.getElementsByTagName('body');
	body[0].style.backgroundColor='green';
	
	var h1arr = document.getElementsByTagName('h1');
	console.log(h1arr);
	console.log(h1arr[0].innerHTML);
	h1arr[0].style.color = 'orange';
	
	var parr = document.getElementsByTagName('p');
	console.log(parr);
	console.log(parr[0].innerHTML);

	var absatz1 = document.getElementById('absatz1');
	console.log(absatz1.innerHTML);
	console.log(absatz1);

	
	var h1wichtigarr = document.getElementsByClassName('wichtig');
	console.log(h1wichtigarr);
	console.log(h1wichtigarr[0].innerHTML);
	
	var pfooter = document.querySelector("footer p");
	console.log(pfooter);
	console.log(pfooter.innerHTML);
	
	
	var einzufuegendesObjekt = document.createElement("a");
	einzufuegendesObjekt.href = "http://www.html-seminar.de";
	einzufuegendesObjekt.innerHTML = "Tutorial für HTML, CSS und JavaScript";
	einzufuegendesObjekt.style.backgroundColor = "#FFFF00";
	body[0].appendChild(einzufuegendesObjekt);

	h1arr[0].addEventListener("click", function() {
        console.log(this);
		console.log(this.classList.value);
		this.className="test";
		console.log(this.classList.value);

		this.style.color="red";
		var elarr=this.nextElementSibling;
		console.log(elarr.id);

		var el=document.querySelector("div");
		console.log(el);

		console.log(event);
		var el2=event.path[2];
		console.log(el2);
		el2.style.backgroundColor="blue";
		el2.classList="wichtig";
		console.log(el2);
		
		


    }, false);

	let vergangenezeit = 1;
	function sekundenanzeige() {
		absatz1.innerHTML=vergangenezeit;
		vergangenezeit++;
		if ( vergangenezeit > 10 ) {
		clearInterval(sekundenzaehler);
		}
	}
	let sekundenzaehler = setInterval(sekundenanzeige, 1000);
	
	let anzeige = setTimeout (TastaturshortcutsEinblenden, 1500);
	function TastaturshortcutsEinblenden () {
		absatz1.nextElementSibling.innerHTML = "Anleitung";
	}
	clearTimeout(anzeige);

 window.defaultStatus = "Hallo, Welt!"; 
document.title = "Hallo, Welt!"; 
console.log(location.pathname);  */
// location.href = "http://www.highscore.de/"; 	
	
	
	
	
	
	
	
	
	
}, false);