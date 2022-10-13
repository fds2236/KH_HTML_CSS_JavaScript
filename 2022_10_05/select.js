// 매서드로 요소 노드 선택하기
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. get 메서드(3개) : 속성값과 태그명 사용
// getElementById
// getElementsByClassName
// getElementsByTagName

// id 속성값이 title인 요소 노드 선택
const el = document.getElementById("title");
console.log(el);
// class 속성값이 text인 요소 노드 선택
const clsEl = document.getElementsByClassName("text");
// console.log(clsEl[0]); // html collection객체는 유사배열이라서 배열의 인덱스로 요소 접근 가능
// console.log(clsEl[1]);
for(let el of clsEl) console.log(el);
const tagEl = document.getElementsByTagName("p");
// console.log(tagEl[0]);
// console.log(tagEl[1]);
for(let el of tagEl) console.log(el);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. query 메서드(2개) : css의 선택자 사용
// querySelector
// querySelectorAll
const el2 = document.querySelector(".box-1"); // 하나만 선택
console.log(el); 
const el_1 = document.querySelectorAll(".box-1 .text"); // 전체를 선택
for(let el of el_1) console.log(el);
console.log(el_1);


