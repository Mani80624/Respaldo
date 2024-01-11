document.addEventListener("DOMContentLoaded", function (){
    var clickButton = document.getElementById("clickButton");
    clickButton.onmousedown = function(){
        alert("Estás presionando un botón del mouse");
    }
})