let button = document.getElementById("addElementButton");

button.addEventListener("click", function() {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "E TA";
    
    let parentDiv = document.getElementById("parent");
    parentDiv.appendChild(newParagraph);
});