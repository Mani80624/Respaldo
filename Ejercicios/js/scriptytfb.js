document.addEventListener("DOMContentLoaded", function (){
    var logofb = this.getElementById("logofb");
    logofb.addEventListener("click", function(){
        alert("Estas saliendo de la página y estás redirigiendote a Facebook");
        window.location.href = "https://www.facebook.com/";
    })
})