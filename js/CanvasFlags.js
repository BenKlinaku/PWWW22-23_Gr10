
var Greece = document.getElementById("Greece");
var Italy = document.getElementById("Italy");
var Japan = document.getElementById("Japan");

window.addEventListener("load",function(){

    // First flag
    Greece.width = 175;
    Greece.height = 95;
    
    
    var ctxG = Greece.getContext("2d");
    // Make it all blue
    ctxG.rect(0, 0, 175, 95);
    ctxG.fillStyle = "blue";
    ctxG.fill();
    // White parts
    ctxG.fillStyle = "white";
    ctxG.fillRect(26, 0 , 13, 53);
    ctxG.fillRect(0, 21, 65, 11);
    ctxG.fillRect(65, 11, 175, 11);
    ctxG.fillRect(65, 33, 175, 11);
    ctxG.fillRect(0, 53, 175, 11);
    ctxG.fillRect(0, 75, 175, 11);
    ctxG.fillStyle = "black";
    ctxG.font = "30px 'Khand'";
    ctxG.fillText("Menu", 58, 55);

    // Border with gradient
    var gradientG = ctxG.createLinearGradient(0, 0, 170, 0)
    gradientG.addColorStop(0,"white");
    gradientG.addColorStop(1,"blue");

    ctxG.strokeStyle = gradientG;
    ctxG.lineWidth = 5;
    ctxG.strokeRect(0, 0, 175, 95);


    // Second flag
    Italy.width = 175;
    Italy.height = 95;
    
    
    var ctxI = Italy.getContext("2d");
    // Make it all white
    ctxI.rect(0, 0, 175, 95);
    ctxI.fillStyle = "white";
    ctxI.fill();
    // Green and red parts
    ctxI.fillStyle = "Green";
    ctxI.fillRect(0, 0 , 58.3, 95);
    ctxI.fillStyle = "Red";
    ctxI.fillRect(116.6, 0, 175, 95);
    ctxI.fillStyle = "black";
    ctxI.font = "30px 'Khand'";
    ctxI.fillText("Menu", 58, 55);

    // Border with gradient
    var gradientI = ctxI.createLinearGradient(0, 0, 170, 0)
    gradientI.addColorStop(0,"Green");
    gradientI.addColorStop(0.5,"White");
    gradientI.addColorStop(1,"Red");

    ctxI.strokeStyle = gradientI;
    ctxI.lineWidth = 5;
    ctxI.strokeRect(0, 0, 175, 95);

    // Third flag
    Japan.width = 175;
    Japan.height = 95;
    
    
    var ctxJ = Japan.getContext("2d");
    // Make it all white
    ctxJ.rect(0, 0, 175, 95);
    ctxJ.fillStyle = "white";
    ctxJ.fill();
    // Red parts
    ctxJ.fillStyle = "Red";
    ctxJ.beginPath();
    ctxJ.arc(87.5, 47.5, 40, 0, 2 * Math.PI);
    ctxJ.fill();
    ctxJ.fillStyle = "black";
    ctxJ.font = "30px 'Khand'";
    ctxJ.fillText("Menu", 58, 55);

    // Border with gradient
    var gradientJ = ctxJ.createLinearGradient(0, 0, 170, 0)
    gradientJ.addColorStop(0,"White");
    gradientJ.addColorStop(0.5,"Red");
    gradientJ.addColorStop(1,"White");

    ctxJ.strokeStyle = gradientJ;
    ctxJ.lineWidth = 5;
    ctxJ.strokeRect(0, 0, 175, 95);
});

// To change the tables view
var GreeceTable = document.getElementById("GTbl");
var ItalyTable = document.getElementById("ITbl");
var JapanTable = document.getElementById("JTbl");


// Making the canvases clicable
Greece.addEventListener("click", function(){
    GreeceTable.style.display = "block";
    ItalyTable.style.display = "none";
    JapanTable.style.display = "none";
});
Japan.addEventListener("click", function(){
    GreeceTable.style.display = "none";
    ItalyTable.style.display = "none";
    JapanTable.style.display = "block";  
});
Italy.addEventListener("click", function(){
    GreeceTable.style.display = "none";
    ItalyTable.style.display = "block";
    JapanTable.style.display = "none";
});