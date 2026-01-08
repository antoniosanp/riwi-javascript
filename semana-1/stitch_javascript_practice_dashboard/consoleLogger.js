// console logger
// elementos dom

const cardConsoleLoggerDiv = document.getElementById("cardConsoleLoggerDiv");
const consoleLoggerInput = document.getElementById("consoleLoggerInput");
const consoleLoggerBtn = document.getElementById("consoleLoggerBtn");

const consoleLoggerOutputArea = document.getElementById("consoleLoggerOutputArea");
const consoleLoggerOutputContainer = document.getElementById("consoleLoggerOutputContainer");
const consoleLoggerOutputTemplate = consoleLoggerOutputContainer.firstElementChild;

// funciones

function createNewLog(texto){
    if (consoleLoggerInput.value.trim() === ""){ return}
    const newLog = consoleLoggerOutputTemplate.cloneNode(true)
    const dateLog = newLog.querySelector(".dateLog");
    const textLog = newLog.querySelector(".textLog");


    const logDate = new Date();
    dateLog.textContent = `[${logDate.getHours()}:${logDate.getMinutes()}:${logDate.getSeconds()}]`

    textLog.textContent = texto;





    consoleLoggerOutputContainer.appendChild(newLog)
}

// listeners

consoleLoggerBtn.addEventListener("click", ()=>{
    createNewLog(consoleLoggerInput.value);
    consoleLoggerInput.value = "";
})
