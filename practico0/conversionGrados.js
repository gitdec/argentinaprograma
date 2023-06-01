const C1 = 32
const C2 = 5/9
function arearec (num1) {
    let conv = (num1 - C1) * C2
    console.log(num1,"°F son ", conv, "°C")
}
arearec(50); //a) es: 10°C
arearec(75); //b) es: 23.88°C