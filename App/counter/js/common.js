const sum      = document.querySelector('.counter_value');
const btnMinus = document.querySelector('.decrement');
const btnPlus  = document.querySelector('.increment');
const btnReset = document.querySelector('.reset');
let num        = Number(sum.textContent);

function total(){
    sum.textContent = num;
};

function increment(){
    num++;
    total();
};

function decrement() {
    num--;
    total();
};

function reset() {
    num = 0;
    total();
};

btnPlus.addEventListener('click', increment, false);
btnMinus.addEventListener('click', decrement, false);
btnReset.addEventListener('click', reset, false);