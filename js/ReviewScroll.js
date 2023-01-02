

// Clickables
var circle1 = document.getElementById("1stCircle");
var circle2 = document.getElementById("2ndCircle");
var circle3 = document.getElementById("3rdCircle");
var circle4 = document.getElementById("4thCircle");
// Words that need to be changed
var r = document.querySelector("#reviewG");
var l = document.querySelector("#locationG");

// Making actions when they get clicked
circle1.addEventListener("click",function(){
    r.innerHTML = "\"I had a great time with my holiday," +
    "the staff polite, the food delicious, the rooms perfect!" +
    "Can't recommend it enough!\"";
    l.innerHTML = "Lesley Greenman, Australia";

    circle4.src = "assets/Main/Circle2.png";
    circle2.src = "assets/Main/Circle2.png";
    circle3.src = "assets/Main/Circle2.png";
    circle1.src = "assets/Main/Circle.jpg";
});

circle2.addEventListener("click",function(){
    r.innerHTML = "\"The time I spent here was among the best of my life. For both me and my family, they all loved it!" +
    "Especially my kids, which are very hard to please. 10/10\n";
    l.innerHTML = "Jonathan Crane, United States of America";

    circle1.src = "assets/Main/Circle2.png";
    circle4.src = "assets/Main/Circle2.png";
    circle3.src = "assets/Main/Circle2.png";
    circle2.src = "assets/Main/Circle.jpg";
});

circle3.addEventListener("click",function(){
    r.innerHTML = "\"I wanted to spend a great vacation with most of my family members. " +
    "And boy did this place deliver! I've had many dissapointing holidays. " +
    "This was a breath of fresh air for me and everyone else involved!\"";
    l.innerHTML = "Yua Sara, Japan ";

    circle1.src = "assets/Main/Circle2.png";
    circle2.src = "assets/Main/Circle2.png";
    circle4.src = "assets/Main/Circle2.png";
    circle3.src = "assets/Main/Circle.jpg";
});

circle4.addEventListener("click",function(){
    r.innerHTML = "\"My husband and I decided spent our tenth year anniversary here. " +
    "The experience was practically perfect! " +
    "It will be a memory we will cherish for the rest of our lives.\"";
    l.innerHTML = "Lesley Sanders, Germany ";

    circle1.src = "assets/Main/Circle2.png";
    circle2.src = "assets/Main/Circle2.png";
    circle3.src = "assets/Main/Circle2.png";
    circle4.src = "assets/Main/Circle.jpg";
});

function ChangePhoto(j){
    for (var i = 0; i < circles.length; i++){
        if(i != j){
            circles[i].src = "assets/Main/Circle2.png";
        }
        else {
            circles[i].src = "assets/Main/Circle.jpg";
        }
    }
}