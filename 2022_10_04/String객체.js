// 객체를 생성하는 여러가지 방법

// 1. 객체 리터럴로 객체를 생성하는 방법(키와 값)
// let memberInfo = {
//     name: "유나",
//     age: 20,
//     addr: "경기도 수원시",
//     gender:  "여성"
// };
// console.log(memberInfo);

// 2. 생성자로 객체를 생성하는 방법
// 자바스크립트는 클래스가 없음
// function MemberInfo(name, age, addr, gender) {
//     this.name = name;
//     this.age = age;
//     this.addr = addr;
//     this.gender = gender;
// }

// let memberInfo = new MemberInfo("유나", 20, "경기도 수원시", "여성");
// let memberInfo1 = new MemberInfo("kh", 20, "서울 강남구", "?");
// console.log(memberInfo);
// console.log(memberInfo1);

// 3. Object.create로 객체를 생성하는 방법(구식)
// 지정된 프로토타입 객체와 프로퍼티를 가지고 새로운 객체를 만들어 줌
// let member = Object.create(Object.prototype, {
//     name : {
//         value : "유나",
//         writable: true,
//         enumerable: true,
//         configurable: true 
//     },
//     age: {
//         value : 20,
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },

// addr: {
//     value : "경기도 수원시",
//     writable: true,
//     enumerable: true,
//     configurable: true
// },

// gender: {
//     value: "여성",
//     writable: true,
//     enumerable: true,
//     configurable: true
// }
// });
// console.log(member);

// 프로토타입
// function Circle(center, radius) { // 함수 선언식(호이스팅 가능)
//     this.center = center; // property프로퍼티(자바로치면 필드, 객체내 저장해야할 값들을 가지고있는 것들)
//     this.radius = radius;
//     this.area = function() { // 함수 표현식(호이스팅 불가)}
//         return Math.PI * this.radius * this.radius;
// }
// }
// let c1 = new Circle(1, 1.0);
// let c2 = new Circle(2, 3.0);
// let c3 = new Circle(3, 4.0);
// console.log(c1.area());

// Circle.prototype.area = function() {
//     return Math.PI * this.radius * this.radius;
// }

// let c1 = new Circle(1, 2.0);
// let c2 = new Circle(2, 2.0);
// let c3 = new Circle(3, 2.0);
// console.log(c1,area());
// 위에꺼는 함수가 각각 존재, 함수가 3번 생성된 것
// 밑에꺼는 prototype(원래 항상 내장해있음)를 만들고 거기에 함수를 만드는 것(자바스크립트의 클래스라고 생각하면 됨)
// 메모리적으로 밑에꺼가 이점!
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 프로토타입 상속
// 자바스크립트는 프로토타입 상속에 기반을 둔 객체지향 언어입니다.
// 상속이 없는 언어이다보니까 프로토타입으로 할 수 없이 상속받게 한 것
let objA = {
    name: "Tom",
    sayHello : function() {
        console.log("Hello! " + this.name);
    }
};

let objB = {
    name: "찬호"
};
objB.__proto__ = objA;

let objC = {};
objC.__proto__ = objB;
objC.sayHello();

let person = {
    name : {
        firstName : "유진",
        lastName : "안"
    },
    age : 20,
    isAdult : true,
    printInfo : function() {
        return this.name;
    }
};
// 객체에 대한 속성(프로퍼티, 함수)에 대한 접근은 (.)연산자를 사용하거나 [] 사용
console.log(person.name);
console.log(person["name"]);

// 객체의 속성값 변경하기
person.name.firstName = "Youjin";
person.name.lastName = "An";
console.log(person.name);

// 객체 속성을 동적으로 추가하기
const carInfo = {} // 빈 객체 생성
carInfo.name = "제네시스"; 
carInfo.year = "2022/10/04";
console.log(carInfo); // 출력 : { name: '제네시스', year: '2022/10/04' }
console.log(carInfo.name); // 출력 : 제네시스

// 객체 속성을 동적을 삭제하기
delete carInfo.year;
console.log(carInfo); // 출력 : { name: '제네시스' }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 깊은 복사 : 기본 자료형에서는 변수 자체게 값이 저장됨
// 기본 자료형끼리 복사를 하면 깊은 복사
// let num = 10; // Number형이기때문에 변수에 값이 저장됨
// let copyNum = num; // 깊은 복사
// console.log(typeof (copyNum)); // 출력 : number

// 얕은 복사 : 참조 자료형에서는 변수 공간에 데이터가 저장되는 것이 아니고, 데이터가 위치한 주소가 저장됨.
// 참조 자료형을 복사하면 값이 아닌 주소가 복사되기 때문에 얕은 복사가 일어남
// const로 선언하면 readonly상태로 재정의할 수 없음
// 참조 자료형은 변수 공간에 데이터가 할당되는 것은 아니고 데이터가 위치하고 있는 메모리의 주소값만 할당됨

// 불가능!!
// const car = {
//     name : "소나타"
// };
// car = {
//     name : "싼타페" // 주소를 변경할 수 없음
// };

// 가능!! 왜? 주소를 변경하는 것아 아니라 데이터는 변경 가능함!
// const car = {
//     name : "소나타"
// };
// car.name = "싼타페"; // 같은 주소에 데이터를 변경하는 것은 가능
// console.log(car) ; // 주소가 아니라 데이터는 변경할 수 있다.

 let car = {
    name : "싼타페"
};
console.log(typeof(car)); // 출력 object

let car2 = car; // 얕은 복사가 일어남, 얕은 복사의 문제점 : c1과 c2의 주소가 같아짐
// car = "제네시스"; // 불가능 왜? 참조자료형은 주소를 할당하는데 주소를 변경하는 것은 불가능
car.name = "제네시스"; // 가능 왜? 할당된 주소를 변경하는 것은 불가능하지만 데이터를 변경하는 것은 가능하니까!
console.log(car2.name); // 출력 : 제네시스
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 표준 내장 객체 : 자바스크립트에서 개발 편의를 위해 수많은 객체가 미리 만들어져 있음
// 스코프에 상관없이 모든 영역에서 공통으로 사용할 수 있음

// 변수명.length : 문자열 길이 확인
const pw = "123";
if(pw.length < 4) { // 문자열 길이 확인
    console.log(pw.length + " => 비밀번호는 최소한 4자리 이상으로 입력하세요.");
}

// 특정 문자열 포함 여부 확인 : include(), indexOf()
// include() : true / false
// indexOf() : 있으면 해당 문자열의 인덱스를 반환, 없으면 -1
const email = "test!name.com";
if(email.includes("@") === false) {
    console.log("올바른 이메일 형식이 아닙니다.");
}

const email2 = "test!name.com";
if(email2.indexOf("@") === -1) {
    console.log("올바른 이메일 형식이 아닙니다.");
}

// 특정 문자열 잘라서 반환 : slice(), substring()
// slice() : 시작 위치와 종료 위치를 지정하면 문자열에서 해당 부분 잘라서 반환
// substring() : 시작 위치와 종류 위치를 지정하면 잘라서 반환
let fruit = "Apple, Banana, Kiwi, Grape";
let result = fruit.slice(7, 13); // 해당 인덱스부터 지정 인덱스 미만까지
console.log(result);

let fruit2 = "Apple, Banana, Kiwi, Grape";
let result2 = fruit2.substring(7, 13);
console.log(result2);

// replace() : 문자열 내 특정 문자열을 지정한 문자열로 변경
let member = "지구오락실, 이영지, 안유진, 미미, 이은지";
let newStr = member.replace("이은지", "나영석");
console.log(newStr);

// toUpperCase(), toLowerCase() : 대문자, 소문자 변경
// concat() : 2개 이상의 문자열을 하나의 문자열로 합치는 함수
let txt1 = "Hello";
let txt2 = "JavaScript";
let txt3 = txt1 + " " + txt2;
console.log(txt3); // 출력 : Hello JavaScript
let txt4 = txt1.concat(" ", txt2); // 둘 중 한 가지 방법 아무거나 괜츈
console.log(txt4); // 출력 : Hello JavaScript

// trim() : 문자열 앞, 뒤의 공백 제거
let str = "            Hello JavaScript        ";
console.log(str.trim()); // 출력 : Hello JavaScript

// padStart(), padEnd() : 문자열 앞과 뒤에 지정된 문자를 남는 길이만큼 추가
let str2 = "55";
str2 = str2.padStart(4, 0); // 총 길이를 정하고 입력받은 문자열에서 남는 공간을 채움
console.log(str2);

// charAt() : 문자열에서 특정 인덱스에 해당하는 문자를 반환하는 함수
// charCodeAt() : 해당 유니코드값 반환
// 유니코드 : 아스키코드 값 + 전세계 문자를 하나의 자료형에 집어넣은 것(2바이트 체제)
// 아스키코드 : 대문자, 소문자를 자료형으로 만든 것 미국에서 128자만 들어감
let addr = "서울시 강남구 역삼동 KH정보교육원";
console.log(addr.charAt(2)); // 출력 : 시
console.log(addr.charCodeAt(12)); // 출력 : 75

// split() : 특정 문자 기준으로 문자열을 분리
let birthday = "1997-06-12";
let arr = birthday.split("-");
console.log(arr); // 출력 : [ '1997', '06', '12' ]
