// task Manager

// elementos dom
const btnAddTask = document.getElementById("btnAddTask");
const addTaskInput = document.getElementById("addTaskInput");
const taskContainerDiv = document.getElementById("taskContainerDiv");

const taskTemplate = taskContainerDiv.firstElementChild;
const contadorTask = document.getElementById("contadorTask")

// funciones

function createTask(text) {
    const task = taskTemplate.cloneNode(true);

    // Cambiar el texto del span
    const span = task.querySelector("span.text-sm");
    span.textContent = text;

    // Botón delete
    const deleteBtn = task.querySelector("button");
    deleteBtn.addEventListener("click", () => {
        task.remove();
        contadorTask.innerText --
    });

    // cuadrito click

    const selectBoxTachar = task.querySelector(".size-5");




    const selectBoxCheck = document.createElement("span");
    selectBoxTachar.appendChild(selectBoxCheck);
    
    selectBoxCheck.classList.add(
        "material-symbols-outlined",
        "text-white",
        "text-[16px]",
        "hidden" // ⬅️ importante
    );

    selectBoxCheck.textContent = "check"


    selectBoxTachar.addEventListener("click",()=>{
        //un toggle
               // Toggle visual de la caja
        selectBoxTachar.classList.toggle("bg-primary");
        selectBoxTachar.classList.toggle("border-primary");
        selectBoxCheck.classList.toggle("hidden")
        

        // Toggle tachado del texto
        span.classList.toggle("line-through");
        span.classList.toggle("text-gray-400");
        
    })
    contadorTask.innerText++;
    return task;
}

// listeners
btnAddTask.addEventListener("click", () => {
    const text = addTaskInput.value.trim();
    if (text === "") return;

    const newTask = createTask(text);
    taskContainerDiv.appendChild(newTask);

    addTaskInput.value = "";
});




