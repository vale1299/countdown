// impostare la dalla fino alla quale si vuole fare il countdown
var countDownDate = new Date("Jul 12, 2018 00:00:00").getTime();

// aggiornare il countdown ogni secondo
var x = setInterval(function() {

    // la data e l'ora di adesso
    var now = new Date().getTime();
    
    // la distanza tra la data del countdown e quella di adesso
    var distance = countDownDate - now;
    
    // calcola i giorni, le ore, i minuti e i secondi
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // scrive sulla pagina html
    if(days < 10) {
        document.getElementById("giorni").innerHTML = '0' + days;
    }
    else {
        document.getElementById("giorni").innerHTML = days; 
    }
    if(hours < 10) {
        document.getElementById("ore").innerHTML = '0' + hours;
    }
    else {
        document.getElementById("ore").innerHTML = hours;
    }
    if(minutes < 10) {
        document.getElementById("minuti").innerHTML = '0' + minutes;
    }
    else {
        document.getElementById("minuti").innerHTML = minutes;
    }  
    if(seconds < 10) {
        document.getElementById("secondi").innerHTML = '0' + seconds;    
    } 
    else {
        document.getElementById("secondi").innerHTML = seconds;
    }
    
    
    // quello che viene scritto quando il countdown è finito
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("titolo").innerHTML = "";
        document.getElementById("countdown").innerHTML = "";
        document.getElementById("fine").innerHTML = "HAPPY BIRTHDAY";
        document.getElementById("nome").innerHTML +='&#x262f;' + " VALE " + '&#x262f;';
    }
}, 1000);