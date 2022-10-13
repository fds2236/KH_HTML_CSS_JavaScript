// 내부객체
// 변수명.객체명()

// 배열을 다루는 Array 객체
// 비파괴적 메소드 forEach()
// 첫번째 방법
const arr =[10, 20, 30, 40, 50];
arr.forEach(function(e){ // e는 요소값이라 같은 거 넣어주면 아무거나 괜츈
    console.log(e);
});
// 두번째 방법
arr.forEach(x => console.log(x));

// toString() : 배열 안의 문자를 쉼표를 이용해 모두 결합해서 하나의 문자열로 반환
let fruits = ["Banana", "orange", "Apple", "Mango"];
console.log(fruits.toString()); // 출력 : Banana,orange,Apple,Mango

// join() : 배열 안의 모든 문자열을 지정한 문자를 이용해 결합
// 비파괴적 메소드(원본이 변경되지 않음)
let fruits2 = ["Banana", "orange", "Apple", "Mango"];
console.log(fruits2.join("/")); // 출력 : Banana/orange/Apple/Mango
console.log(fruits2); // 출력 : [ 'Banana', 'orange', 'Apple', 'Mango' ]


// 자바는 스택과 큐가 따로 있었음
// 자바스크립트는 따로 없기때문에 pop(), push() 메소드를 이용함
// pop() : 배열에서 마지막 데이터를 제거하고 반환(스택구조)
// 파괴적 메서드
let fruits3 = ["Banana", "orange", "Apple", "Mango"];
console.log(fruits3.pop()); // 출력 : Mango
console.log(fruits3); // 출력 : [ 'Banana', 'orange', 'Apple' ]

// push() : 새로운 요소 추가(스택구조), 배열의 길이를 반환
let fruits4 = ["Banana", "orange", "Apple", "Mango"];
fruits4.push("Kiwi");
console.log(fruits4.push("Grape")); // 출력 : 6 
console.log(fruits4); // 출력 : [ 'Banana', 'orange', 'Apple', 'Mango', 'Kiwi' ]

// shift() : 배열의 첫번째 요소를 제거하고 반환
// unshift() : 배열의 첫번째 요소에 값을 추가하고 배열의 길이를 반환
// 파괴적 메서드
let fruits5 = ["Banana", "orange", "Apple", "Mango"];
console.log(fruits5.shift()); // 출력 : Banana
console.log(fruits5); // [ 'orange', 'Apple', 'Mango' ]
console.log(fruits5.unshift("Lemon")); // 출력 : 4 [ 'Lemon', 'orange', 'Apple', 'Mango' ]
console.log(fruits5);

// 배열의 요소의 변경
for(let i = 0; i < fruits5.length; i++) {
    fruits5[i] = "사과"
    console.log("for문 순회 : " + fruits5[i]);
}

// 자바의 향상된 for문과 동일 : 요소의 값을 변경해도 원본 배열은 변경되지 않음
for(let e in fruits5){
    e = "딸기";
    console.log(e);
}

for(let e of fruits5){
    console.log(e); // 출력 사과
}

// concat() : 2개 이상의 배열을 하나의 배열로 배합
let member = ["찬호", "은종"];
let member2 = ["수빈", "도연"];
let member3 = ["윤정", "은지"];
let member4 = ["승렬", "정운"];
let kh = member.concat(member2, member3, member4);
console.log(kh);

// slice() : 해당 인덱스부터 끝까지
// 매개변수가 두 개이면 시작인덱스부터 종료 인덱스 미만까지!
let fruits6 = ["사과", "포도", "수박", "딸기", "배"];
console.log(fruits6.slice(2)); // 출력 : [ '수박', '딸기', '배' ]
console.log(fruits6.slice(2, 3)); // 출력 : [ '수박' ]

// sort() : 정렬(기본적으로는 오름차순 정렬을 함)
let number = [1,2,3,4];
console.log(number.sort()); // 오름차순
console.log(number.reverse()); // 내림차순

// filter() : 조건에 맞는 값을 추출해 새로운 배열 생성
// 자주 사용됨
// 비파과적 메서드
let persons = [
    {
        name: "유재석",
        point: 78,
        city: "서울"
    },
    {
        name: "김종국", 
        point: 92,
        city : "서울"
    },
    {
        name: "송지효", 
        point: 82,
        city: "부산"
    },
    {
        name: "양세찬",
        point: 76,
        city: "제주"
    }
];

let pass = persons.filter(e => (e.point > 80)); // e : 요소선택자, ()는 생략가능
console.log(pass); // 출력 : [{ name: '김종국', point: 92, city: '서울' },{ name: '송지효', point: 82, city: '부산' }]
let pass2 = persons.filter(e => e.city === "서울");
console.log(pass2); // 출력 : [{ name: '유재석', point: 78, city: '서울' },{ name: '김종국', point: 92, city: '서울' }]