// Button, image, text and video which need to be interacted with
var button = document.querySelector("#vidButton");
var image = document.querySelector("#Video img");
var text = document.querySelector("#textVideo");
var video = document.querySelector("#vid");

// Make button disappear content and make video appear
button.addEventListener("click", function(){
    image.style.display = "none";
    text.style.display = "none";
    video.style.display = "block";
});

// Same thing but with the play button
image.addEventListener("click", function(){
    image.style.display = "none";
    text.style.display = "none";
    video.style.display = "block";
});