let milliseconds = 0
let seconds = 0
let minutes = 0

let digits = document.getElementById('digits')

let StartButton = document.getElementById('Start-btn')

let interval;

function Start () {
    
    StartButton.disabled = true 

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
        
        digits.innerHTML = String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0') + ':' + String(milliseconds).padStart(2, '0')
    }, 10)
}

function Stop () {
    clearInterval(interval)
    
    StartButton.disabled = false

}

function Reset () {
   stop()

milliseconds = 0
seconds = 0
minutes = 0

}

function Lap () {
    const node = document.createElement("Li")
    node.innerHTML = String(minutes).padStart(2, "0") + ";" + String(seconds) 
    document.getElementById("laps"),appendChild(node);
}