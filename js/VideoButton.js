var button = document.querySelector("#vidButton");
var image = document.querySelector("#Video img")
var video = document.querySelector("#vid");

button.addEventListener("click", function(){
    video.style.display = "block";
});

image.addEventListener("click", function(){
    video.style.display = "block";
});