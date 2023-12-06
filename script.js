//functions 

let operator1
let operator2
let operand 
function addition () {
    operator1 = display.value
    updateDisplay('clear')
    operand = 'plus'   
}

function subtraction () {
    operator1 = display.value
    updateDisplay('clear')
    operand = 'minus'}

function multiply () {
    operator1 = display.value
    updateDisplay('clear')
    operand = 'multi'}

function division () {
    operator1 = display.value
    updateDisplay('clear')
    operand = 'divi'
}

function press1 () {
    return updateDisplay(1)
    }
    
    function press2 () {
    return updateDisplay(2)
    }
    
    function press3 () {
    return updateDisplay(3)
    }
    
    function press4 () {
    return updateDisplay(4)
    }
    
    function press5 () {
    return updateDisplay(5)
    }
    
    function press6 () {
    return updateDisplay(6)
    }
    
    function press7 () {
    return updateDisplay(7)
    }
    
    function press8 () {
    return updateDisplay(8)
    }
    
    function press9 () {
    return updateDisplay(9)
    }
    
    function press0 () {
    return updateDisplay(0)
    }
    
                                                  

function result() {
    operator2 = display.value
    updateDisplay('clear')
    try {
    if (operand == 'plus') {
        return display.value = Number(operator1) + Number(operator2)
    }
    else if (operand == 'minus') {
        return display.value = Number(operator1) - Number(operator2)
    }
    else if (operand == 'divi') {
        return display.value = Number(operator1) / Number(operator2)
    }
    else if (operand == 'multi') {
        return display.vvalue = Number(operator1) * Number(operand2)
    }
}
    finally {
        operand = ''
    }
}

//segure o impulso a principio de recriar todos os botões usando um loop
//e na proxima vez que vier aqui, falta o botão de igual que deve pegar
//o operador e só então fazer a operação
//minha ideia inicial é fazer cada função operador mudar uma certa variável
//que está sendo esperada para ser comparada e saber que tipo de operação deve
// ser feita com o numero, pra então apenas retornar o resultado dentro de
//outra função



function updateDisplay (keypress) {
    if (keypress == 'clear') {
        display.value = ''
    }
    else {
        display.value += keypress
        }
}
//page
updateDisplay(5)



 let button1 = document.querySelector('#button1')
 button1.addEventListener('click', press1)

let button2 = document.querySelector('#button2')
button2.addEventListener('click', press2)

let button3 = document.querySelector('#button3')
button3.addEventListener('click', press3)

let button4 = document.querySelector('#button4')
button4.addEventListener('click', press4)

let button5 = document.querySelector('#button5')
button5.addEventListener('click', press5)

let button6 = document.querySelector('#button6')
button6.addEventListener('click', press6)

let button7 = document.querySelector('#button7')
button7.addEventListener('click', press7)

let button8 = document.querySelector('#button8')
button8.addEventListener('click', press8)

let button9 = document.querySelector('#button9')
button9.addEventListener('click', press9)

let button0 = document.querySelector('#button0')
button0.addEventListener('click', press0)

let buttonPlus = document.querySelector('#buttonPlus')
buttonPlus.addEventListener('click', addition)

let buttonMinus = document.querySelector('#buttonMinus')
buttonMinus.addEventListener('click', subtraction)

let buttonDivision = document.querySelector('#buttonDivision')
buttonDivision.addEventListener('click', division)

let buttonMultiply = document.querySelector('#buttonMultiply')
buttonMultiply.addEventListener('click', multiply)

let buttonResult = document.querySelector('#buttonResult')
buttonResult.addEventListener('click', result)

//layout