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

showDisplay()

function showDisplay() {
    displayElement.innerHTML=display;
}