const element = document.getElementById("image");

const button = document.querySelector('button');

button.addEventListener('click',
    function() {
        element.src = "img/yellow_lamp.png";
    }
);