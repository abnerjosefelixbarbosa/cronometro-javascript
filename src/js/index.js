let hora = 0
let minuto = 0
let segundo = 0
let milisecundo = 0

let cronometro

document.cronometro.start.onclick = () => Start()
document.cronometro.pause.onclick = () => Pause()
document.cronometro.reset.onclick = () => Reset()

const Start = () => {
    Pause()
    cronometro = setInterval(() => Timer(), 10)
}

const Pause = () => clearInterval(cronometro)

const Reset = () => {
    hora = 0
    minuto = 0
    segundo = 0
    milisecundo = 0

    document.getElementById("hora").innerText = "00"
    document.getElementById("minuto").innerText = "00"
    document.getElementById("segundo").innerText = "00"
    document.getElementById("milisegundo").innerText = "000"
}

const Timer = () => {
    if ((milisecundo += 10) === 1000) {
        milisecundo = 0
        segundo++
    }

    if (segundo === 60) {
        segundo = 0
        minuto++
    }

    if (minuto === 60) {
        minuto = 0
        hora++
    }

    document.getElementById("hora").innerText = Data(hora)
    document.getElementById("minuto").innerText = Data(minuto)
    document.getElementById("segundo").innerText = Data(segundo)
    document.getElementById("milisegundo").innerText = Data(milisecundo)
}

const Data = (input) => input > 10 ? input : `0${input}`