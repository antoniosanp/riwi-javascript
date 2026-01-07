
// Contador

// elementos dom

const btnAddContador = document.getElementById("btnAddContador");
const btnResetContador = document.getElementById("btnResetContador")
const btnRemoveContador = document.getElementById("btnRemoveContador")
const contadorTextSpan = document.getElementById("contadorTextSpan");


//----funciones-------------------------
function add(){
    contadorTextSpan.textContent++

}

function remove(){

    contadorTextSpan.textContent--
}


//---listeners-------------------------

btnAddContador.addEventListener("click",add);
btnRemoveContador.addEventListener("click",remove)
btnResetContador.addEventListener("click", ()=>{
     contadorTextSpan.textContent = 0
})
//------------------------------------------