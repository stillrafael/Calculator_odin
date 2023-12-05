//functions 

function addition (operatorNumber) {
    result = operatorNumber + userNumber
    return result
}

function subtraction (operatorNumber) {
    result = userNumber - operatorNumber
    return result
}

function multiply (operatorNumber) {
    result = operatorNumber * userNumber
    return result
}

function division (operatorNumber) {
    result = userNumber / operatorNumber
    return result 
}

//buttons

let button1 = document.querySelector('#button1')
button1.addEventListener('click', press1)

let button2 = document.querySelector('#button2')
button1.addEventListener('click', press2)

let button3 = document.querySelector('#button3')
button1.addEventListener('click', press3)

let button4 = document.querySelector('#button4')
button1.addEventListener('click', press4)

let button5 = document.querySelector('#button5')
button1.addEventListener('click', press5)

let button6 = document.querySelector('#button6')
button1.addEventListener('click', press6)

let button7 = document.querySelector('#button7')
button1.addEventListener('click', press7)

let button8 = document.querySelector('#button8')
button1.addEventListener('click', press8)

let button9 = document.querySelector('#button9')
button1.addEventListener('click', press9)

let button0 = document.querySelector('#button0')
button1.addEventListener('click', press0)

let buttonPlus = document.querySelector('#buttonPlus')
button1.addEventListener('click', pressPlus)

let buttonMinus = document.querySelector('#buttonMinus')
button1.addEventListener('click', pressMinus)

let buttonDivision = document.querySelector('#buttonDivison')
button1.addEventListener('click', pressDivision)

let buttonMultiply = document.querySelector('#buttonMultiply')
button1.addEventListener('click', pressMultiply)

//layout