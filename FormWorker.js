let myForm = document.getElementById("myForm")

let synth = new Tone.Synth().toDestination()

function onSubmit (e) {
    e.preventDefault()

    synth.triggerAttack(myForm.elements["YourName"].value)

    let duration = parseFloat(myForm.elements["duration"].value)

    synth.triggerRelease(Tone.now() + duration)
}

myForm.addEventListener("submit", onSubmit) 