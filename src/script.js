
//Test Code Function
// const name = document.querySelector(".name")
//
// function changeColor (color) {
//     // code
//     name.style.color = color;
// }
//
// const logo = document.querySelector(".headline")
//
// function logoColorChange (color) {
//     //code
//     logo.style.color = color;
// }


function calculateCost() {
    var area = parseFloat(document.getElementById('area').value);
    var price = parseFloat(document.getElementById('price').value);
    var totalCost = area * price;
    document.getElementById('result').innerHTML = 'Die Gesamtkosten betragen: ' + totalCost.toFixed(2) + ' Euro';
}