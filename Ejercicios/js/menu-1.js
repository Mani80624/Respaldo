document.addEventListener("DOMContentLoaded", function () {
    var toogleButton = document.getElementById("toogleButton");
    var menu = document.getElementById("menu");

    toogleButton.onclick = funtion(){
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    }
})