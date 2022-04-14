var screen = document.getElementById('tip');
var screen2 = document.getElementById('tip2');
// var buttons = document.querySelector(".tip")

let reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    let totalBill = document.querySelectorAll("input")[0].value;
    // console.log(totalBill)
    let tipPercent = tip/100;
    console.log(tipPercent)
    let split = document.querySelectorAll("input")[7].value;
    
// if(totalBill === "" || tipPercent === 0 || split === 0){
//     alert ("please enter your value")
//     screen.innerText = "0.00"
//     screen2.innerText = "0.00"

// }

     let totalTip = (totalBill * tipPercent)/split
     totalTip = totalTip.toFixed(2);
     
    let total = 100 + tipPercent;
       console.log(total)
     let totalAmount = (totalBill * (1.00 + tipPercent))/split
     console.log(totalAmount)
     totalAmount = totalAmount.toFixed(2);

    screen.innerText = totalAmount
    screen2.innerText = totalTip
if(totalBill === "" || tipPercent === 0 || split === 0){
    alert ("please enter your value")
    screen.innerText = "0.00"
    screen2.innerText = "0.00"

}

})
var button1 = document.querySelectorAll("input")[1]
var button2 = document.querySelectorAll("input")[2]
var button3 = document.querySelectorAll("input")[3]
var button4 = document.querySelectorAll("input")[4]
var button5 = document.querySelectorAll("input")[5]

let tip;
// console.log(tip)
button1.addEventListener('click', (event) => {
    tip = 5;
})
button2.addEventListener('click', (event) => {
    tip = 10;
})
button3.addEventListener('click', (event) => {
    tip = 15;
})
button4.addEventListener('click', (event) => {
    tip = 25;
})
button5.addEventListener('click', (event) => {
    tip = 50;
})
// button5.addEventListener('click', function handleClick(event) {
//     event.target.classList.add('active');
  
// 




// var screen = document.getElementById('tip');
// var screen2 = document.getElementById('tip2');

// let reset = document.querySelector('.reset');
// document.addEventListener('onload', () => {
//     let totalBill = document.querySelectorAll("input")[0].value;
//     // console.log(totalBill)
//     let tipPercent = tip/100;
//     console.log(tipPercent)
//     let split = document.querySelectorAll("input")[7].value;
    
// if(totalBill === "" || tipPercent === 0 || split === 0){
//     alert ("please enter your value")
// }

//      let totalTip = (totalBill * tipPercent)/split
//      totalTip = totalTip.toFixed(2);
     
//     let total = 100 + tipPercent;
//        console.log(total)
//      let totalAmount = (totalBill * (1.00 + tipPercent))/split
//      console.log(totalAmount)
//      totalAmount = totalAmount.toFixed(2);

//     screen.innerText = totalAmount
//     screen2.innerText = totalTip


// })

// var button1 = document.querySelectorAll("input")[1]
// var button2 = document.querySelectorAll("input")[2]
// var button3 = document.querySelectorAll("input")[3]
// var button4 = document.querySelectorAll("input")[4]
// var button5 = document.querySelectorAll("input")[5]

// let tip;
// // console.log(tip)

// button1.addEventListener('click', (event) => {
//     tip = 5;
// })
// button2.addEventListener('click', (event) => {
//     tip = 10;
// })
// button3.addEventListener('click', (event) => {
//     tip = 15;
// })
// button4.addEventListener('click', (event) => {
//     tip = 25;
// })
// button5.addEventListener('click', (event) => {
//     tip = 50;
// })
// // init();