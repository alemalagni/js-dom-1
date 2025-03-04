// Dichiarazioni variabili
const element = document.getElementById("image");
const button = document.querySelector('button');
const text = document.getElementById("text");
let acceso = false;

// Script
button.addEventListener('click',
    function() {
        if (acceso === false) {
            element.src = "img/yellow_lamp.png";
            text.innerHTML = "Spegni"
            acceso = true;
        } else if (acceso === true) {
            element.src = "img/white_lamp.png";
            text.innerHTML = "Accendi"
            acceso = false;
        }
    }
);