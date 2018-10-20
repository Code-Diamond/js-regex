function getNumber(){
	document.getElementById("r").innerHTML = /\d+/.exec(document.getElementById("o").innerHTML);	
}
function getWordBeforeComma(){
	document.getElementById("r").innerHTML = /[^ ]*,/.exec(document.getElementById("o").innerHTML);	
}
function getCapitalWord(){
	document.getElementById("r").innerHTML = /[A-Z][^ ]*/.exec(document.getElementById("o").innerHTML);	
}