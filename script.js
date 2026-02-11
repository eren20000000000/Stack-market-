let pride = document.getElementById("price")
let time = document.getElementById("time")

function Time(Clock) {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()
    Clock.textContent = `Time:- ${hours}:${minutes}:${second}`
}
Time(time)
setInterval(() => {
    Time(time)
}, 1000);