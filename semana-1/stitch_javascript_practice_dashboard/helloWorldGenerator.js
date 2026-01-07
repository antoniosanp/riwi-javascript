// greetin generator

// elementos dom

const nameInput = document.getElementById("nameInput");
const waitingDiv = document.getElementById("waitingDiv");
const btnGreetMe = document.getElementById("btnGreetMe")





//--listeners---
// nameInput.addEventListener("change",()=>{
//     nameInput.textContent = nameInput.value
// })


btnGreetMe.addEventListener("click", ()=>{
    alert(`hello ${nameInput.value }`)
})

nameInput.addEventListener("input",()=>{

    if(nameInput.value != ""){
        waitingDiv.style.backgroundColor = "limegreen";
        waitingDiv.textContent = "ok"
    }
    else{
        waitingDiv.textContent = "waiting for input"
        waitingDiv.style.backgroundColor = "#aaa"
    }
})



