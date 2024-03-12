const inputBox = document.getElementById("input-box");
const listContianer = document.getElementById("list-container");
const btn = document.getElementById("add")

btn.addEventListener('click', () =>{
    if(inputBox.value === ''){
        alert("Enter some adata")
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContianer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
})

listContianer.addEventListener('click', (e) =>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContianer.innerHTML)
}

function showList(){
    listContianer.innerHTML = localStorage.getItem("data");
}
showList();