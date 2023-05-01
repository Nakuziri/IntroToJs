let milliseconds = 0
let seconds = 0
let minutes = 0

let interval;

function Start () {
    Reset()

    interval = setInterval(function (){
        milliseconds = milliseconds + 10

        if (milliseconds >= 1000) {
            seconds = seconds + 1
            milliseconds = 0
        }



        if (seconds >= 60) {
            minutes = minutes + 1 
            seconds = 0
        }        
        
        digits.innerHTML = minutes + ':' + String(seconds).padStart(2, '0') + ':' +milliseconds
    }, 10)
}

function Stop () {
    clearInterval(interval)
}

function Reset () {
   stop()

milliseconds = 0
seconds = 0
minutes = 0

}