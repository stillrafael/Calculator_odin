function addition () {
    buttonpress = true
    updateOperator('add')
    resultKey('add')
    buttonpress = false
}

function subtraction () {
    buttonpress = true
    updateOperator('sub')
    resultKey('sub')
    buttonpress = false

}

function multiply () {
    buttonpress = true
    updateOperator('mul')
    resultKey('mul')
    buttonpress = false

}

function division () {
    buttonpress = true
    updateOperator('div')
    resultKey('div')
    buttonpress = false

}
let operator1 = ''
let operator2 = ''
let operation = ''
let result
let buttonpress = false
function resultKey (argument) {
    if (buttonpress == true) {
        if (resultingNumber.textContent == '') {
            operator1 = display.value
            updateResult(operator1)
            updateDisplay('clear')
        }
            else if (holdingOperator.textContent != ''){
                operator2 = resultingNumber.textContent
                operator1 = display.value
                result = calcResult(argument, parseInt(operator1), parseInt(operator2))
                updateDisplay('clear')
                updateResult(result)
                buttonpress = false
                
            }
            
        }
        else {
           if (display.value != '') {
            let currentOperation = holdingOperator.textContent
            operator2 = display.value
            operator1 = resultingNumber.textContent
            result = calcResult(currentOperation, parseInt(operator1), parseInt(operator2))
            changeDisplay(result)
            updateOperator('')
            updateResult('')


           }
        }
    }
    


//changeDisplay                 //pra alterar o campo que voce digita. integral
//display.value                  //pra consultar o valor no campo digitado
//updateDisplay('clear')        //limpar o campo de digitar
// updateOperator               // pra alterar qual a operação que está sendo feita
// holdingOperator.textContent  //pra verificar qual a string da operação
// }



// updateResult                // pra alterar o numero
// resultingNumber.textContent //pra verificar qual o valor dentro //resulting number é onde é pra jogar o resultado
// }


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


function updateDisplay (keypress) {
    if (keypress == 'clear') {
        display.value = ''
    }
    else {
        display.value += keypress
        }
}

function updateOperator (operator) {
    return holdingOperator.textContent = operator
}



function updateResult (result) {
    return resultingNumber.textContent = result
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