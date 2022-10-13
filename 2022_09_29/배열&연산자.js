/* 이스케이프 */
// 작은 따옴표, 큰 따옴표는 섞어서 사용가능
// \' : 작은 따옴표 출력하고 싶을 때
// \" : 작은 따옴표 출력하고 싶을 때
// \n : 줄 바꾸고 싶을 때
// \\ : 슬래시 출력하고 싶을 때
// \t : tap키 눌러서 출력하고 싶을 때
let keyword = "안녕하세요. \n\\저는 \"곰돌이\t사육사\"\\입니다. " + (100 + 100);
console.log(keyword);

// 템플릿 문자열 : 백틱 `${변수}` "문자열" '문자열'
// 출력 : 백틱을 사용해 봅시다! 안녕하세요. \저는 "곰돌이	사육사"\입니다. 200
console.log(`백틱을 사용해 봅시다! ${keyword}`); 
console.log("백틱을 사용해 봅시다!" + keyword); 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 배열 */
// 배열 기본 : 대괄호를 묶어서 생성한다.
// 배열의 접근은 인덱스로 한다. (0부터 시작)
let score = [80, 99, 77, 65];
console.log(score[1]); // 배열의 1번째 값이니까 99
console.log(typeof(score)); // object/주소개념

for(let i =0; i < score.length; i++) {
    console.log(`배열의 ${i}번째 값은 ${score[i]}입니다.`)
}

// 자바의 배열과 다른 점 : 여러가지 자료형을 포함할 수 있다
// 배열내에 배열을 넣을 수 있다.
const array = ["아이브", "안유진", 20, true, [100, 88, 99], ["블랙핑크", "아이브", "뉴진스", "에스파", "잇지", "2ne1"]];
console.log(array[4][0]); // 출력 : 100, 4번째 배열의 0번째 배열
// 문자형만 따로 한 글자씩 출력 가능(숫자나 boolean타입 불가)
console.log(array[0][2]); // 출력 : 브
console.log(array[5][4][0]); // 출력 : 잇
// console.log(array[4][1][0]); // 출력 : undefined 왜? 100자체가 하나의 값인 숫자형

// 왜 const로 한 번 선언했는데 재정의 할 수 있을까? 
// array는 배열이 있는 주소를 가지고 있는거니까 배열의 값은 바뀔 수 있음
// 즉 상수 객체의 값을 변경하고 추가할 수는 있지만 상수 객체 자체를 재정의할 수는 없음

// const name = "곰돌이사육사";
// name = "달빛사냥꾼"; 
// console.log(name);

/* 객체 리터럴 : 키와 값으로 구성, 중괄호로 만든다. */
let score2 = [88, 77, 65, 86]; // 국어, 영어, 수학, 과학
console.log(score2);
console.log("-----------------------------")
let scoreObject = [{
    korScore : 88,
    engScore : 77,
    matScore : 65,
    scnScore : 86
},
{
    korScore : 77,
    engScore : 65,
    matScore : 77,
    scnScore : 100
},
{
    korScore : 98,
    engScore : 97,
    matScore : 100,
    scnScore : 96
}
];

for(let i = 0; i < scoreObject.length; i++) {
    console.log(`${i}번째 사람의 국어 성적 : ${scoreObject[i].korScore}`)
    console.log(`${i}번째 사람의 영어 성적 : ${scoreObject[i].engScore}`)
    console.log(`${i}번째 사람의 수학 성적 : ${scoreObject[i].matScore}`)
    console.log(`${i}번째 사람의 과학 성적 : ${scoreObject[i].scnScore}`)
    console.log("-----------------------------")
};

let name = {
    city : ["서울", "부산", "인천", "대구", "대전", "광주"],
    fruit : ["사과", "포도", "바나나", "복숭아", "자두", "오렌지", "딸기"]
}
console.log(name.city); // 출력 : [ '서울', '부산', '인천', '대구', '대전', '광주' ]
console.log(name.city[0]); // 출력 : 서울

for(let key in name){
    console.log(`${key} : ${name[key]}`); // 출력 : city : 서울,부산,인천,대구,대전,광주 fruit : 사과,포도,바나나,복숭아,자두,오렌지,딸기
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 연산자 */
let num =10;
console.log(2 ** 32); // 출력 : 4294967296,  ** : 제곱 연산자
console.log(Math.floor(num/3)); // 출력 : 3,  / : 나누기 연산자(Math.floor함수(버림)를 이용)
console.log(num % 3); // 출력 : 1, % : 나머지 연산자

/* 대입 연산자와 복합 대입 연산자 */
let num3 =10;
console.log(num3 += 2); // num3 = num3 + 2; // 출력 : 12
console.log(num3 *= 2); // num3 = num3 * 2; 출력 : 24

/* 비교연산자 */
// 자바스크립트에서는 데이터형이 달라도 비교 가능(자바는 데이터형이 다르면 비교 자체가 불가능) 
console.log(10 == "10"); // 출력 : true(값만 비교)
console.log(10 === "10"); // 출력 : false(값과 데이터형 모두 비교)
console.log(10 != "10"); // 출력 : false(값만 비교)
console.log(10 !== "10"); // 출력 : true(값과 데이터형 모두 비교)
console.log(10 > "9"); // 출력 : true(자바는 데이터형이 다르면 비교 자체가 불가능)
console.log("Javascript" < "javascript"); // 출력 : true, 아스키 코드값으로 비교(대문자<소문자)

/* 형변환 */
let num4 = 10 + Number("10"); // 출력 : 20
console.log(num4);  // 문자형을 명시적으로 숫자형으로 형변환

let name2 = 10 + String(20); // 출력 : 1020
console.log(name2); // 숫자형을 명시적으로 문자형으로 형변환