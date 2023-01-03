// Labels
var ch1 = document.getElementById("l1");
var ch2 = document.getElementById("l2");
var ch3 = document.getElementById("l3");
var ch4 = document.getElementById("l4");
// Photos selected by class
var photos1 = document.querySelectorAll(".pic.place");
var photos2 = document.querySelectorAll(".pic.aktivitetet");
var photos3 = document.querySelectorAll(".pic.room");
// Adding function to labels
ch1.addEventListener("click",function(){
    checkChecks(1);
});
ch2.addEventListener("click",function(){
    checkChecks(2);
});
ch3.addEventListener("click",function(){
    checkChecks(3);
});
ch4.addEventListener("click",function(){
    checkChecks(4);
});
// Main function
function checkChecks(k){
    switch(k){
        case 1:
            photos1Change(1);
            photos2Change(1);
            photos3Change(1);
            break;
        case 2:
            photos1Change(1);
            photos2Change(2);
            photos3Change(2);
            break;
        case 3:
            photos1Change(2);
            photos2Change(2);
            photos3Change(1);
            break;
        case 4:
            photos1Change(2);
            photos2Change(1);
            photos3Change(2);
            break;
    }
}
// Makes photos hidden or shown depending on input
function photos1Change(k){
    for(let i = 0; i < photos1.length; i++){
        if(k == 1){
            photos1[i].style.display = "block";
        }
        else {
            photos1[i].style.display = "none";
        }
    }
}
function photos2Change(k){
    for(let i = 0; i < photos2.length; i++){
        if(k == 1){
            photos2[i].style.display = "block";
        }
        else {
            photos2[i].style.display = "none";
        }
    }
}
function photos3Change(k){
    for(let i = 0; i < photos3.length; i++){
        if(k == 1){
            photos3[i].style.display = "block";
        }
        else {
            photos3[i].style.display = "none";
        }
    }
}