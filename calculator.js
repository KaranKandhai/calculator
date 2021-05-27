let display='0';
let firstValue=null;
let displayElement=document.querySelector('.display');
let buttonsElement=document.querySelector('.buttons');

buttonsElement.addEventListener('click',clickHandler);

function clickHandler(event) {
    let element=event.target;
    if(element.className==='btn-number') {
        handleNumber(element.innerHTML);
    }
}

function handleNumber(nr) {
    if(display==='0') {
        display=nr;
    }
    else {
        display=display+nr
    }
    
    showDisplay();
}

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  const { target } = event;


  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('decimal')) {
    console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    return;
  }

  console.log('digit', target.value);
});


showDisplay()

function showDisplay() {
    displayElement.innerHTML=display;
}

function inputDigit(digit) {
    const { displayValue } = calculator;
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
  
  console.log('digit', target.value);
  inputDigit(target.value);
  updateDisplay();

  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    
    const inputValue = parseFloat(displayValue);
  
    
    if (firstOperand === null && !isNaN(inputValue)) {
     
      calculator.firstOperand = inputValue;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  }
   
  console.log('operator', target.value);
  handleOperator(target.value);
  updateDisplay();

  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
  
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  
    console.log(calculator);
  }

  function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    } else if (operator === '*') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      return firstOperand / secondOperand;
    }
  
    return secondOperand;
  }
  
  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
  
    if (firstOperand == null && !isNaN(inputValue)) {
      calculator.firstOperand = inputValue;
  
    } else if (operator) {
  
      const result = calculate(firstOperand, inputValue, operator);
  
  
  
      calculator.displayValue = String(result);
  
      calculator.firstOperand = result;
  
    }
  
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
  }
  
  function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
  }
  
  
