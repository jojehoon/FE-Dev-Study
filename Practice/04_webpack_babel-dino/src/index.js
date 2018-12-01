/*
node.js
 - 서버에서 구동되도록 설계된 자바스크립트 실행 환경
 - 컴퓨터의 파일 시스템에 접근 가능한 서버 사이드 언어

 webpack 실행 명령어
  - ./node_modules/.bin/webpack index.js bundle.js
  - ./node_modules/.bin/webpack

babel
 - es6 문법을 es5로 트랜스파일(호환 가능하게)
*/ 

// var moment = require('momnet');
// console.log("Hello from 자바스크립트!");
// console.log(moment().startOf('day').fromNow());

import moment from 'moment';
console.log('Hello from 자바스크립트!');
console.log(moment().startOf('day').fromNow());
var name = 'Bob', time = 'today';
console.log(`Hello ${name}, how are you ${time}?`);
