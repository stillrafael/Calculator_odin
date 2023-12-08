function addition () {
    if (operation == '') {
        operation = 'add'
        resultKey()
    
    }
    else {
        resultKey()
        holdingOperator.textContent = 'add'
        waiting = true
    }
}

function subtraction () {
    if (operation == '') {
        operation ='sub'
        resultKey()
       }
       else {
        resultKey()
        holdingOperator.textContent  = 'sub'
        waiting = true
       }
    }

function multiply () {
    if (operation == '') {
        operation = 'mul'
        resultKey()
    }
   else {
    resultKey()
    holdingOperator.textContent  = 'mul'
    waiting = true
   }
}

function division () {
    if (operation == '') {
        operation = 'div'
        resultKey()
    }
   else {
    resultKey()
    holdingOperator.textContent  = 'div'
    waiting = true
   }
}


function resultKey () {
        if (waiting) {
            if (resultingNumber.textContent == '') {
                operator2 = display.value

            }
            else {
                operator2 = resultingNumber.textContent
                operator1 = display.value
            }
            result = calcResult(operation, parseInt(operator1), parseInt(operator2))
            giveResult(result)
            updateDisplay('clear')
            waiting = false
            operation = ''
            holdingOperator.textContent = ''
        }
        else {
            operator1 = display.value
            updateDisplay('clear')
            holdingOperator.textContent = operation
            waiting = true
            operator2 = ''
            
            
        }
    }
  
    


function giveResult(option) {
    return resultingNumber.textContent = option
}

let waiting = false

const display = document.querySelector('#display')
//functions 
function addOp(operator1, operator2) {
    return operator1 + operator2 
}

function subOp(operator1, operator2) {
    return operator1 - operator2
}

function divOp (operator1, operator2) {
    return operator1 / operator2
}

function MulOp (operator1, operator2) {
    return operator1 * operator2
}

function calcResult (operation, operator1, operator2) {
    if (operation == 'add') {
        return addOp(operator1, operator2)
    }
    else if (operation == 'sub') {
        return subOp(operator1, operator2)
    }
    else if (operation == 'div') {
        return divOp(operator1, operator2)
    }
    else if (operation == 'mul') {
        return MulOp(operator1, operator2)
    }
}

function changeDisplay (change) {
    return display.value = change
}

let operationPending = false
let operator1 = ''
let operator2 = ''
let operation = ''
let result = ''

function updateDisplay (keypress) {
    if (keypress == 'clear') {
        display.value = ''
    }
    else {
        display.value += keypress
        }
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
    
   

//page
updateDisplay(5)

let holdingOperator = document.querySelector('p')

let resultingNumber = document.querySelector('#showingResult')

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
buttonResult.addEventListener('click', resultKey)

//layout