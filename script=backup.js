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
let result
function addition () {
        
        if (operationPending) {
            if (holdingOperator.textContent != '') {
                operator2 = holdingOperator.textContent
            }
            else {
                operator2 = display.value

            }
            let result = calcResult(operation, parseInt(operator1), parseInt(operator2))
            holdingOperator.textContent = result
            operation = 'add'
            updateDisplay('clear')
            operator2 = ''
            operationPending = false
        }
        else {
            operation = 'add'
            operator1 = display.value
            if (holdingOperator.textContent != '') {
                operator2 = holdingOperator.textContent
                operator1 = display.value
                result = calcResult(operation, parseInt(operator1), parseInt(operator2))
                holdingOperator.textContent = result
                
            }

            updateDisplay('clear')
            operationPending = true
            
        }
    
}

function subtraction() {

    if (operationPending) {
        if (holdingOperator.textContent != '') {
            operator1 = holdingOperator.textContent
        }
        else {
            
            operator2 = display.value

        }
        let result = calcResult(operation, parseInt(operator1), parseInt(operator2))
        holdingOperator.textContent = result
        operation = 'sub'
        updateDisplay('clear')
        operator2 = ''
        operationPending = false
    }
    else {
        operation = 'sub'
        operator1 = display.value
        if (holdingOperator.textContent != '') {
            operator1 = holdingOperator.textContent
            operator2 = display.value
            result = calcResult(operation, parseInt(operator1), parseInt(operator2))
            holdingOperator.textContent = result
            
        }
        updateDisplay('clear')
        operationPending = true
        
    }
}

function multiply() {

    if (operationPending) {
            if (holdingOperator.textContent != '') {
                operator2 = holdingOperator.textContent
            }
            else {
                operator2 = display.value

            }
            let result = calcResult(operation, parseInt(operator1), parseInt(operator2))
            holdingOperator.textContent = result
            operation = 'mul'
            updateDisplay('clear')
            operator2 = ''
            operationPending = false
        }
        else {
            operation = 'mul'
            operator1 = display.value
            if (holdingOperator.textContent != '') {
                operator2 = holdingOperator.textContent
                operator1 = display.value
                result = calcResult(operation, parseInt(operator1), parseInt(operator2))
                holdingOperator.textContent = result
                updateDisplay('clear')
            operationPending = true
            
        }
        }
            }

function division() {
    if (operationPending) {
        operator2 = display.value
        let result = calcResult(operation, parseInt(operator1), parseInt(operator2))
        changeDisplay(result)
        operator2 = ''
        operationPending = false
        operation = ''
    }
    else {
        operation = 'div'
        operator1 = display.value
        updateDisplay('clear')
        operationPending = true
    }
}

function resultKey() {
    if (operation !== '') {
        if (holdingOperator.textContent != '' ) {
            operator2 = holdingOperator.textContent
            operator1 = display.value
        }
        else {
            operator2 = display.value
        }
        let result = calcResult(operation, parseInt(operator1), parseInt(operator2))
        changeDisplay(result)
        operationPending = false
        holdingOperator.textContent = ''
    }
    operation = ''
}


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
holdingOperator.value = 1
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