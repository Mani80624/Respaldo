document.addEventListener("DOMContentLoaded", function(){
    var scrollArea = document.getElementById("scrollarea");
    scrollArea.onwheel = function(event){
        alert("Está girando la rueda del mouse");
    }
})