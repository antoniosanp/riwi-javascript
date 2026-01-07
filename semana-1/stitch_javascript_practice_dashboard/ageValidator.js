// age Validator

// elementos dom

const btnCheckAge = document.getElementById("btnCheckAge")
const ageInput = document.getElementById("ageInput")

// listeneres

btnCheckAge.addEventListener("click", ()=>{
    if( ageInput.value >= 18){
        alert("valid age")
    }
    else{
        alert("underage")
    }
})
