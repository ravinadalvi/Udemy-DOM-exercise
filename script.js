var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems=document.getElementsByTagName("li"); 


function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";	

	var del = document.createElement("button");
	del.appendChild(document.createTextNode("Delete"));
	li.appendChild(del);
	del.onclick=removeParent;
}

function addListAfterClick() {
	if (inputLength()>0)
	{
		createListElement();
	}
}

function addListAfterKeyPress(event){
	if (inputLength()>0 && event.keyCode===13){
		createListElement();
	}
}
button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeyPress);

ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}

function listLength(){
	return listItems.length;
}

function deleteButton(){
	var del=document.createElement("button");
	del.appendChild(document.createTextNode("Delete!"));
	listItems[i].appendChild(del);
	del.onclick=removeParent;
}

for( i=0;i<listLength();i++){

deleteButton();
}
function removeParent(evt){
	evt.target.parentNode.remove();
}
