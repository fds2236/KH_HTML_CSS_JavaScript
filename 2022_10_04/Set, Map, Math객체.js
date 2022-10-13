// Set 객체 : 중복 허용하지 않는 특성을 가집니다.
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);
console.log(mySet.size); // 출력 : 3
console.log(mySet.has(3)); // 출력 : true
console.log(mySet); // 출력 : Set(3) { 1, 2, 3 }

// Map 객체 : 키와 값을 맵핑시켜 값을 저장 
let map = new Map();
map.set("name", "유나");
map.set("email", "yuna@gmail.com");
map.set("age", 20);
map.set("addr", "경기도 수원시");

console.log(map.size); // 출력 : 4
console.log(map.get("name")); // get은 키에 대한 값을 반환, 출력 : 유나
console.log(map.has("email")); // has는 존재 여부 확인, 출력 : true
map.delete("name");
map.forEach(e => console.log(e)); // 출력 : yuna@gmail.com 20 경기도 수원시
console.log(map);

// Math객체 : 수학 연산을 다룸
// Math.floor() : 소수점 이하 내림
// Math.ceil() : 소수점 이하 올림
// Math.round() :  소수점 이하 반올림
const number = 10.52;
console.log(Math.floor(number)); // 10
console.log(Math.ceil(number)); // 11
console.log(Math.round(number)); // 11

// Math.random() : 0보다 크고 1보다 작은 숫자형 값을 반환함
while(true) {
    let rand = Math.floor(Math.random() * 10) + 1 // 1 ~ 10사이의 난수
    console.log("생성된 랜덤값은 " + rand);
    if(rand == 10) break;
}

let seed = prompt("전체 응모자 수를 입력하세요");
let picked = Math.floor((Math.random()* seed) + 1);
document.writeln("전체 응모자수 : " + seed);
document.write("<br>")
document.write("당첨자 번호 : " + picked);