
window.addEventListener("load",function(){
    // When page loads it checks system time and changes image according to time
    var date = new Date();

    var time = date.getHours();
    var section = document.querySelector("#Reserve");
    var images = [];
    images[1] = "assets/RoomsAndReserve/Background/Beach1.jpg";
    images[2] = "assets/RoomsAndReserve/Background/Beach2.jpg";
    images[3] = "assets/RoomsAndReserve/Background/Beach3.jpg";
    images[4] = "assets/RoomsAndReserve/Background/Beach4.jpg";


    if(6 <= time && time < 10){ // Morning
        section.style.backgroundImage = "url('" + images[4] + "')";
    }
    else if(10 <= time && time < 16){ // Day
        section.style.backgroundImage = "url('" + images[1] + "')";
    }
    else if(16 <= time && time < 20){ // Evening
        section.style.backgroundImage = "url('" + images[2] + "')";
    }
    else if(20 <= time && time < 24){ //  Night
        section.style.backgroundImage = "url('" + images[3] + "')";
    }
    else if(0 <= time && time < 6){ // Night
        section.style.backgroundImage = "url('" + images[3] + "')";
    }
});
// If you change system time wait 30-60 seconds before you refresh page