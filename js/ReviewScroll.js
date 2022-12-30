

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
    r.innerHTML = "Lorem ip sint totam, blanditiis ea.";
    l.innerHTML = "Lesley Greenman, Australia";

    circle4.src = "assets/Main/Circle2.png";
    circle2.src = "assets/Main/Circle2.png";
    circle3.src = "assets/Main/Circle2.png";
    circle1.src = "assets/Main/Circle.jpg";
});

circle2.addEventListener("click",function(){
    r.innerHTML = "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia" +
    "placeat, quam,r, ex aut " +
    "sint esse totam amet distinctio? Mollitia perspiciatis sequi nihil sint totam, blanditiis ea.\"";
    l.innerHTML = "Jonathan Crane, United States of America";

    circle1.src = "assets/Main/Circle2.png";
    circle4.src = "assets/Main/Circle2.png";
    circle3.src = "assets/Main/Circle2.png";
    circle2.src = "assets/Main/Circle.jpg";
});

circle3.addEventListener("click",function(){
    r.innerHTML = "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia" +
    "placeat, quam,r, jdosiajfoijafoiasjfoiasjex aut " +
    "sint esse totaia perspiciatis sequi nihil sint totam, blanditiis ea.\"";
    l.innerHTML = "Yua Sara, Japan ";

    circle1.src = "assets/Main/Circle2.png";
    circle2.src = "assets/Main/Circle2.png";
    circle4.src = "assets/Main/Circle2.png";
    circle3.src = "assets/Main/Circle.jpg";
});

circle4.addEventListener("click",function(){
    r.innerHTML = "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia" +
    "placeat, quam,r, jdosiajfoijafoiasjfoiasjex aut " +
    "sint esse totaia perspiciatis sequi nihil sint totam, blanditiis ea.\"";
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