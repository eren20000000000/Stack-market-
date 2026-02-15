export function stockData() {
    return {
        Name:"ANIME X HOUSE",
        Symbol:"AXH",
        Price:(Math.random()*4).toFixed(2),
        Time:new Date().toLocaleTimeString()
    }
}