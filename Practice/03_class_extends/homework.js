
// 부모 클래스, 클래스 선언문
class Animal{
  // 생성자 메서드, 생성자 함수 역할
  constructor(name, age, location){
    this.name = name;
    this.age  = age;
    this.location = location;
  }
  get sayInfo(){
    return `${this.name}이 사는 곳은 ${this.location}이고 나이는 ${this.age}세 입니다.`;
  }
}

// 자식 클래스, extends 키워드를 통해 class 간의 상속이 가능
class Human extends Animal{
  // get sayInfo() {
    //   return `${this.name}님이 사는 곳은 ${this.location}이고 나이는 ${this.age}세 입니다.`;
    // }

    // 상속 받은 class(super class)의 method를 사용할 수 있으며, 오버라이딩(overriding) 가능
    // super 키워드를 통해 super class의 method에 접근 가능
    // sub class에 정의된 constructor가 없다면 super class의 constructor가 호출
}

// 인스턴스 생성, new연산자는 constructor를 호출하면서 받은 인자들을 constructor의 파라미터로 전달
let person = new Human('홍길동','24','한양');
console.log(person.sayInfo);

// class는 'ust strict'를 선언하지 않나도 strict 모드에서 실행
// method를 작성할 때, function 키워드와 콜론(:)을 작성하지 않는다
// method 사이에서 콤마(,)를 작성하지 않는다
// class에서 method를 추가하면 prototype에 추가