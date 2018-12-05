# 명시적 바인딩 (call, apply, bind)

* 함수가 호출된 위치에 따라 this의 값이 결정

* 다음 메서드를 이용하여 this의 값을 명시적으로 지정하여 함수를 실행시킬 수 있다
  * Function.prototype.call()

  * Function.prototype.apply()

  * Function.prototype.bind()

## this의 기본 값
* Function

  * Strict Mode     : undefined

  * Non-Strict Mode : window(전역객체)

* Method

  * 해당 객체의 인스턴스


## this의 명시적 값

### call, apply

  * 첫번째 매개변수는 this가 될 대상을 지정, 2번째 매개변수는 호출하는 함수로 전달

  * call()은 파라미터로 인수 목록을, 반면에 apply()는 파라미터로 배열을 받는다
  
```
var sum = function(x, y){
  console.log(x + y);
}
sum.call(null, 5, 10);
sum.apply(nul, [5, 10]);
// null은 this를 대체
```

### bind

  * bind는 함수를 직접 호출하지 않고 this가 명시적으로 설정된 함수를 반환

  * 실행을 위해서는 반환 받은 함수를 직접 실행한다

```
var sum = function(x, y){
  console.log(x + y);
}
var tmp = sum.bind(null, 5);
tmp(10)
```

### call & apply와 bind의 차이

* call, apply은 함수를 즉시 호출

* bind는 새로운 함수를 생성할 뿐 호출을 하지 않는다
