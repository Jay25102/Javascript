// solution is inelegant
const form = document.querySelector("form");
const list = document.querySelector("ul.toDoList");

// localStorage.clear();
const listArr = JSON.parse(localStorage.getItem("todos")) || [];
// retrieve saved todos
for (let i = 0; i < listArr.length; i++) {
    const newLi = document.createElement("li");
    const newButton = document.createElement("button");
    newLi.innerText = listArr[i].task;
    newButton.setAttribute("class", "remove");
    newButton.innerText = "remove";
    newLi.append(newButton);
    list.append(newLi);
}

// either remove a todo or strikethrough
list.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        removeArr = JSON.parse(localStorage.getItem("todos"));
        // remove the remove
        for (let i = 0; i < removeArr.length; i++) {
            if (event.target.parentElement.innerText.replace('remove', '') === removeArr[i].task) {
                removeArr.splice(i, 1);
                localStorage.setItem("todos", JSON.stringify(removeArr));
            }
        }
        console.log(event.target.parentElement.innerText);
        console.log(removeArr);
        event.target.parentElement.remove();
    }
    else  if (event.target.tagName === "LI") {
        event.target.classList.toggle("strike");
    }
});

// create a new todo and add it as an object to array in localstorage?
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const inputForm = document.querySelector(".inputForm");
    const newLi = document.createElement("li");
    const newButton = document.createElement("button");

    newLi.innerText = inputForm.value;
    listArr.push({task: newLi.innerText});
    localStorage.setItem("todos", JSON.stringify(listArr));
    console.log(JSON.parse(localStorage.getItem("todos")));
    newButton.setAttribute("class", "remove");
    newButton.innerText = "remove";

    newLi.append(newButton);
    list.append(newLi);
    form.reset();

    // listArr.push({task: newLi.innerText});
    // localStorage.setItem("todos", JSON.stringify(listArr));
    // console.log(JSON.parse(localStorage.getItem("todos")));
});