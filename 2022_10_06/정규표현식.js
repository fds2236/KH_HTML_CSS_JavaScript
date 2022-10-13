// 정규표현식 만드는 방법 2가지
// 슬래시로 만들기, 정규식 리터럴 사용하기
let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
let firstResult = /가장+/.exec(targetStr);    // 패턴과 일치하는 문자열이 여러 개인 경우
let secondResult = /가장큰+/.exec(targetStr); // 패턴과 일치하는 문자열이 하나도 없는 경우
console.log(firstResult);  // abb -> 가장 맨 처음으로 일치하는 문자열이 반환됨.
console.log(secondResult); // null