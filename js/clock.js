
function userName () {
    let name= prompt ("Kullanıcı Adınızı Giriniz");
    document.getElementById("myName").innerHTML = name;
}

function showTime () {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dayName = date.getDay();

    if (dayName == 1) {
        dayName = "Pazartesi";
    } else if (dayName == 1) {
        dayName = "Pazartesi";
    }
    else if (dayName == 2) {
        dayName = "Salı";
    }
    else if (dayName == 3) {
        dayName = "Çarşamba";
    }
    else if (dayName == 4) {
        dayName = "Perşembe";
    }
    else if (dayName == 5) {
        dayName = "Cuma";
    }
    else if (dayName == 6) {
        dayName = "Cumartesi";
    }
    else if (dayName == 7) {
        dayName = "Cuma";
    }

    hour : hour < 10 ? "0" + hour : hour;
    minutes : minutes < 10 ? "0" + minutes : minutes;
    seconds : seconds < 10 ? "0" + seconds : seconds;

    var time = hour + ":" + minutes + ":" + seconds + " " + dayName;
    document.getElementById("myClock").innerHTML = time;
    document.getElementById("myClock").innerHTML= time;
    setTimeout(showTime, 1000);

}

userName () ;
showTime () ;