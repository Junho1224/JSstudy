// 자바스크립트 기초 1. 변수 | primitive 타입과 object의 차이점

// number, string, boolean, null, undefined

let number = 2;
let number2 = number;

console.log(number);
console.log(number2);


number2 = 3;

console.log(number);
console.log(number2);


// object

let obj = {
    name: 'ellie',
    age: 5,
};
console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);

obj.name = 'james';
console.log('------');
console.log(obj.name);
console.log(obj2.name);


// 변수를 선언하면 데이터를 담을 수 있는 공간이 할당되고 메모리에 들어오지만
// 오브젝트는 레퍼런스가 복사되어 들어온다.
// let은 선언하고나면 값을 바꿀 수 있지만
// const로 정의하고 나면 값을 바꿀 수 없다.

// const obj1 = {
//     name = 'ellie';
//     age = 5,
// }



