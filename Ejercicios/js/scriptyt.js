document.addEventListener("DOMContentLoaded", function (){
    var logoyt = this.getElementById("logoyt");
    logoyt.addEventListener("click", function(){
        alert("Estas saliendo de la página y estás redirigiendote a Youtube");
        window.location.href = "https://www.youtube.com/";
    })
})