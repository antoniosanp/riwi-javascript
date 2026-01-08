// theme toggle
// elementos dom

const themeCard = document.getElementById("themeCard");
const toggleInputDarkMode = document.getElementById("toggleInputDarkMode");
const themeCardTitle = document.getElementById("themeCardTitle")
//- listeners

toggleInputDarkMode.addEventListener("click", ()=>{
    themeCard.classList.toggle('dark');
    
})