const form = document.querySelector("form");
const list = document.querySelector("ul.toDoList");

if (!localStorage.getItem("listArr")) {
    let listArr = [];
    localStorage.setItem("listArr", JSON.stringify(listArr));
}

list.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
    else  if (event.target.tagName === "LI") {
        event.target.classList.toggle("strike");
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const inputForm = document.querySelector(".inputForm");
    const newLi = document.createElement("li");
    const newButton = document.createElement("button");

    newLi.innerText = inputForm.value;
    newButton.setAttribute("class", "remove");
    newButton.innerText = "remove";

    newLi.append(newButton);
    list.append(newLi);

    let tempArr = localStorage.getItem("listArr");
    console.log("printing tempArr: " + tempArr);
    // tempArr.push(inputForm.value);
    // localStorage.setItem("listArr", JSON.stringify(tempArr));

    form.reset();
});

console.log(JSON.parse(localStorage.getItem("listArr")));