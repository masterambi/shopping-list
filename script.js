var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");
var deleteButtons = document.querySelectorAll(".delete")

function toggleDoneAfterClick(item) {
    item.addEventListener("click", function() {
        item.classList.toggle("done")
    })
}

function deleteListAfterClick(item) {
    item.addEventListener("click", function() {
        item.parentElement.remove();
    })
}

function createDeleteButton() {
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteListAfterClick(deleteButton);
    return deleteButton;
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(createDeleteButton());
    toggleDoneAfterClick(li)
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}




list.forEach(toggleDoneAfterClick);

deleteButtons.forEach(deleteListAfterClick); 

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);