// 노드 조작하기
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. 컨텐츠 조작하기
// textContent, innerText, innerHTML
// let txtCon = document.getElementById("title").textContent; // 보이든 보이지 않든 모든 텍스트 표시
// let inTxt = document.getElementById("title").innerText; // 웹브라우저에 표시되는 텍스트
// let inHtml = document.getElementById("title").innerHTML; // HTML을 포함한 텍스트
// textContent, innerText, innerHTML 이용하여 내용 수정
// document.getElementById("title").textContent = "<h1>가을은 싫어요</h1>" // h1태그 인식 안함
// document.getElementById("title").innerHTML = "<h1>겨울은 더 싫어요</h1>" // 태그 인식 함
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. 스타일 조작하기
// 개별적으로 스타일 조작하기
// <노드>.style.css속성명 = <속성값>
// const pEl = document.querySelector("#text");
// pEl.style.backgroundColor = "#ff0000";
// pEl.style.fontsize = "20px";
// pEl.style.color = "#ffffff";
// pEl.style.fontWeight = "bold";

// 클래스로 스타일 조작하기 
// classList.add("클래스이름", "클래스이름")
// const elId = document.querySelector("#text");
// elId.classList.add("active", "orange-color"); 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. 메소드로 속성 조작하기
// getAttribute : 해당 태그 내에 있는 속성값을 읽어내는 것  => http://google.co.kr
// setAttribute : 속성값 바꾸기
// const aEl = document.querySelector("a");
// const href = aEl.getAttribute("href");
// aEl.setAttribute("href", "http://kakao.com");
// aEl.innerText="카카오";
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. 노드 추가 및 삭제하기
// 노드 생성(createElement, createTextNode, createAttribute) => 노드 연결
// 노드 생성하기
const aEl = document.createElement("a"); /* a노드 생성 */
document.body.appendChild(aEl); /* 바디노드에 a노드 연결 */ 
const test = document.querySelector("a"); /* a노드 선택 */
test.innerHTML = "테스트"; /* 텍스트 테스트 입력 */
test.setAttribute("href", "http://naver.com"); /* 속성값 바꾸기 */
// 노드 삭제하기
document.body.removeChild(aEl);