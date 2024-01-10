const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list");

function addTask(){
    if(inputBox.value === ''){
        alert("You haven't entered anything...");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let ic = document.createElement("i");
        ic.setAttribute("class", "fa-regular fa-circle checkbox");
        li.prepend(ic);

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
        if(e.target.firstChild.classList[0] === "fa-regular"){
            e.target.firstChild.classList.replace('fa-regular', 'fa-solid');
            e.target.firstChild.classList.replace('fa-circle', 'fa-circle-check');
            //console.log(e.target.firstChild.classList);
        }
        else{
            e.target.firstChild.classList.replace('fa-solid', 'fa-regular');
            e.target.firstChild.classList.replace('fa-circle-check', 'fa-circle');
        }
        saveData();
    }
    else if(e.target.tagName === "I"){
        e.target.parentElement.classList.toggle("checked");
        if(e.target.classList[0] === "fa-regular"){
            e.target.classList.replace('fa-regular', 'fa-solid');
            e.target.classList.replace('fa-circle', 'fa-circle-check');
            //console.log(e.target.classList);
        }
        else{
            e.target.classList.replace('fa-solid', 'fa-regular');
            e.target.classList.replace('fa-circle-check', 'fa-circle');
        }
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();