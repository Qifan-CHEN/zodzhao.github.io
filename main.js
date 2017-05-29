var a = document.getElementsByClassName("active");
// a[0].addEventListener("click", function() {
// 	alert("hell oo");
// });

var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");
var goButton = document.getElementById('gobutton');
// numOne.addEventListener("input", add);
// numTwo.addEventListener("input", add);
// goButton.addEventListener("click", add);


function add() {
  var one = parseFloat(numOne.value) || 0;
  var two = parseFloat(numTwo.value) || 0;
  
  addSum.innerHTML = "your sum is: " + (one+two);
}

var hover = document.getElementsByClassName("icon");
for (i = 0; i < hover.length; i++){
	hover[i].addEventListener("mouseenter", pop);
	hover[i].addEventListener("mouseleave", unpop);

	console.log(i)
}

function pop() {
	console.log("hovered here");
	this.className += " animated pulse";
}

function unpop() {
	console.log("unhovered here");
	this.className = "col-sm-2 icon infobutton";
}
