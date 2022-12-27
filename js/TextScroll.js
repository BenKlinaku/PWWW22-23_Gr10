// Buttons that need to be made active
var RightArrow = document.querySelector("#rightArrowButton");
var LeftArrow = document.querySelector("#leftArrowButton");

// Counter
var count = 1;

// Other items that need to be changed during the interaction
var perNight = document.querySelector("#perNight");
var RoomImages = document.querySelector("#RoomImages");
var stars = document.querySelector("#stars");
var roomDescription = document.querySelector("#roomDescription");

// Function that checks count and changes document based on it
function checkCount(count){
    switch(count){
        case 1:
            perNight.innerHTML = "$150 <br> <span> per night </span>";
            RoomImages.src = "assets/Main/Bedrooms/Room" + count + ".jpg";
            stars.innerHTML = "&#9733 &#9733 &#9733 &#9733 &#9733";
            roomDescription.innerHTML = " Double room 26.7 sq m <br>" +
            "(292 sq ft) on average and a 5.4 sq m <br>" +
            "bathroom (most bathrooms <br>" +
            "are equipped with a bidet)."
            break;
        case 2:
            perNight.innerHTML = "$200 <br> <span> per night </span>";
            RoomImages.src = "assets/Main/Bedrooms/Room" + count + ".jpg";
            stars.innerHTML = "&#9733 &#9733 &#9733 &#9733 &#9734";
            roomDescription.innerHTML = " Triple room 27.8 sq m <br>" +
            "(300 sq ft) on average and a 5.8 sq m <br>" +
            "bathroom (most bathrooms <br>" +
            "are equipped with a bidet)."
            break
        case 3:
            perNight.innerHTML = "$120 <br> <span> per night </span>";
            RoomImages.src = "assets/Main/Bedrooms/Room" + count + ".jpg";
            stars.innerHTML = "&#9733 &#9733 &#9733 &#9733 &#9733";
            roomDescription.innerHTML = " Single room 13.4 sq m <br>" +
            "(144 sq ft) on average and a 3.4 sq m <br>" +
            "bathroom (most bathrooms <br>" +
            "are equipped with a bidet)."
            break
        case 4:
            perNight.innerHTML = "$250 <br> <span> per night </span>";
            RoomImages.src = "assets/Main/Bedrooms/Room" + count + ".jpg";
            stars.innerHTML = "&#9733 &#9733 &#9733 &#9733 &#9734";
            roomDescription.innerHTML = " Double room 35.9 sq m <br>" +
            "(386 sq ft) on average and a 7.2 sq m <br>" +
            "bathroom (most bathrooms <br>" +
            "are equipped with a bidet)."
            break
        case 5:
            perNight.innerHTML = "$325 <br> <span> per night </span>";
            RoomImages.src = "assets/Main/Bedrooms/Room" + count + ".jpg";
            stars.innerHTML = "&#9733 &#9733 &#9733 &#9733 &#9733";
            roomDescription.innerHTML = " Triple room 43.2 sq m <br>" +
            "(465 sq ft) on average and a 10.9 sq m <br>" +
            "bathroom (most bathrooms <br>" +
            "are equipped with a bidet)."
            break
    }
}
// Gives arrows eventListener, that change count counter when clicked
LeftArrow.addEventListener("click",function(){
    if (count == 1){
        count = 5;
    }
    else{
        count = count - 1;
    }
    checkCount(count);
});

RightArrow.addEventListener("click",function(){
    if (count == 5){
        count = 1;
    }
    else{
        count = count + 1;
    }
    checkCount(count);
});