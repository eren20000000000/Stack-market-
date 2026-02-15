// let price = document.getElementById("price")
// let time = document.getElementById("time")

// function Time(Clock) {
//     let date = new Date()
//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let second = date.getSeconds()
//      Clock.textContent = `Time:- ${hours}:${minutes}:${second}`
   
// }
// Time(time)

// setInterval(() => {
//     Time(time)
// }, 1000);


// function Price() {
//     let date = new Date()
//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let second = date.getSeconds()
//     let priceValue = (hours * 10) + (minutes * 0.5) + (second * 0.1)
//     price.textContent = `Price:- $${priceValue.toFixed(2)}`
// }
// Price()

// setInterval(() => {
//     Price()
// }, 1000);
function stockData() {
    return {
        name:"ANiME X HOUSE",
        Symbol:"AXH",
        price:Math.random().toFixed(2),
        time:new Date().toLocaleTimeString()
    }
}

console.log(stockDate())