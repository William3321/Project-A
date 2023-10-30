const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const counter = document.getElementById("Counter");
const errorMessage = document.getElementById("Errormessage");

function addTask() {
    if (inputBox.value.trim() === "") {
        errorMessage.style.display = "block";
        errorMessage.style.opacity = 1;
    } else {
        errorMessage.style.opacity = 0;
        errorMessage.style.display = "none";
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        countCompletedTasks()
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        countCompletedTasks()
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

function countCompletedTasks() {
    const checkedTasks = document.querySelectorAll('.checked');
    counter.textContent = checkedTasks.length; 
}

showTask()
countCompletedTasks()



