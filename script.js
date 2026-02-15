import { stockData } from "./getstockdata.js";

let name = document.getElementById("name");
let symbol = document.getElementById("symbol");
let price = document.getElementById("price");
let time = document.getElementById("time");
let img = document.getElementById("imgs");
let previousPrice = null;

function render() {
  let data = stockData();
  name.textContent = `Name:- ${data.Name}`;
  symbol.textContent = `Symbol:- ${data.Symbol}`;
  price.textContent = `Price:- ${data.Price}`;
  time.textContent = `Time:- ${data.Time}`;
  
  console.log(price)


  if(previousPrice !== null ){

    if(previousPrice > data.Price){
        img.src="red.png"
    } 
    else if(previousPrice < data.Price) {
        img.src="green.png"
    }else{
        img.src="gray.png"
    }

  }
  previousPrice = data.Price

  
}
render();

setInterval(() => {
  render();
}, 1000);
