class Person{
    constructor(name, age, location){
        this.name     = name;
        this.age      = age;
        this.location = location;
    }

    get sayInfo() {
        return `${this.name}님이 사는 곳은 ${this.location}이며 나이는 ${this.age}세 입니다.`;
    }
}

const person1 = new Person('이름1', 29, '사는 곳1');
const person2 = new Person('이름2', 30, '사는 곳2');

console.log(person1.sayInfo); // 출력: 이름님이 사는 곳은 사는 곳이며 나이는 29세 입니다.
console.log(person2.sayInfo); // 출력: 이름2님이 사는 곳은 사는 곳2이며 나이는 30세 입니다.