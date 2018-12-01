// import '@babel/polyfill'
import moment from 'moment'
// const moment = require('moment')

// 1st ------------------------------------------------------------
// 
// const time = document.querySelector('#time');
// const button = Array.from(document.querySelectorAll('.btn'));
// let timeFormat = '';

// button.forEach( buttonValue =>
//   buttonValue.addEventListener('click' ,function(){
//     timeFormat = buttonValue.value;
//     time.textContent = moment().format(`${timeFormat}`);
//   })
// )
// 
// 1st ------------------------------------------------------------


// 2st ------------------------------------------------------------
// 
// const buttonWrap = document.querySelector('.buttonWrap');
// const time       = document.querySelector('#time');
// let timeFormat   = '';

// const btnFunc = event => {
//   if(event.target.className !== 'btn') return;
//   timeFormat = event.target.value;
//   time.textContent = moment().format(`${timeFormat}`);
// }
// buttonWrap.addEventListener('click', btnFunc);
// 
// 2st ------------------------------------------------------------



const arr = "(['L','LT','LTS'])";
const inp = document.querySelector('input');
let timeFormat = '';
document.addEventListener('keypress', function(e){
  if(e.keyCode !== 13) return;
  
  timeFormat = e.target.value;
  if(arr.includes(timeFormat)){
    time.textContent = moment().format(timeFormat);
  }
})
