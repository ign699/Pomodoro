/**
 * Created by Jasiek on 06.11.2016.
 */



var workmin;
var worksec;
var breaksec;
var breakmin;
var previousSecond = -1;
var interval;
var work = true;
var min;
var sec;
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

function displayTime(){
    document.getElementById('seconds').textContent=displaySeconds(sec);
    document.getElementById('minutes').textContent=displayMinutes(min);
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

function setWork() {
    min = workmin = parseInt(document.getElementById('minutes').textContent);
    sec = worksec = parseInt(document.getElementById('seconds').textContent);
}
function setBreak() {
    breakmin = parseInt(document.getElementById('minutes').textContent);
    breaksec = parseInt(document.getElementById('seconds').textContent);
}
function myTimer() {
    var d = new Date();
    if(previousSecond != d.getSeconds()){
        if(previousSecond == -1){
            displayTime();
            previousSecond = d.getSeconds();
            decreaseTimer()
        }
        else{
            previousSecond = d.getSeconds();
            displayTime();
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
                min = breakmin;
                sec = breaksec;
                work=false;
            }
            else{
                min=workmin;
                sec=worksec;
                work=true;
            }
            displayTime();
            document.getElementById("beep").play();
            setTimeout(startCountDown(), 3000);
        }
    }, 100);
}




function stop(){
    clearInterval(interval);
    min=workmin;
    sec=worksec;
    displayTime()
}

