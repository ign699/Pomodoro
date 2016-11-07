/**
 * Created by Jasiek on 06.11.2016.
 */

var min = 25;
var sec = 0;
var previousSecond = -1;
var interval;
var work = true;

function displaySeconds(seconds){
    if(seconds < 10){
        return "0" + seconds;
    }
    else{
        return seconds;
    }
}

function displayMinutes(minutes) {
    if(minutes < 10){
        return "0" + minutes;
    }
    else{
        return minutes;
    }
}

function decreaseTimer(){
    if(sec == 0){
        sec = 59;
        min = min - 1;
    }
    else{
        sec = sec - 1;
    }
}

function myTimer() {
    var d = new Date();
    if(previousSecond != d.getSeconds()){
        if(previousSecond == -1){
            document.getElementById("clock").innerHTML = displayMinutes(min) + ":" + displaySeconds(sec);
            previousSecond = d.getSeconds();
            decreaseTimer()
        }
        else{
            previousSecond = d.getSeconds();
            document.getElementById("clock").innerHTML = displayMinutes(min) + ":" + displaySeconds(sec);
            decreaseTimer();
        }

    }
}


function startCountDown(){
    clearInterval(interval);
    interval = setInterval(function(){
        myTimer();
        if(min==-1 && sec == 59){
            clearInterval(interval);
            if (work==true){
                min = 5;
                sec = 0;
                work=false;
            }
            else{
                min=25;
                sec=0;
                work=true;
            }


            document.getElementById("clock").innerHTML = displayMinutes(min) + ":" + displaySeconds(sec);
            document.getElementById("beep").play();
            setTimeout(startCountDown(), 3000);
        }
    }, 100);
}




function stop(){
    clearInterval(interval);
    min=25;
    sec=0;
    document.getElementById("clock").innerHTML = displayMinutes(min) + ":" + displaySeconds(sec);
}

