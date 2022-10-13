
// 컴파일언어는 통번역이라고 생각! 문제가 없으면 실행파일 돌아감, 그래서 메인이 있음(자바)
// 인터프리터언어는 동시통역이라고 생각! 한 줄 한 줄 해석, 그래서 메인이 없기도 함(자바스크립트), 실행 간결
// 길이체크, 하이픈있는지 체크

let jumin; // 주민등록번호
while(true){
    jumin = prompt("주민등록번호를 입력하세요");
    if(jumin.length != 14) alert("입력 오류 : 다시 입력하세요.");
    else {
        if(jumin.indexOf("-") == -1) alert("하이픈이 누락되었습니다."); // indexOf : 문자열에서 특정 문자열을 찾고 검색된 문자열이 첫번째로 나타나는 위치를 리턴, 찾는 문자열이 없으면 -1을 리턴, 대소문자 구분함 
        else break;
    } 
}

let gender = jumin.charAt(7);
let genderStr;
if (gender == "1" || gender == "3") genderStr = "남성";
else genderStr = "여성";

let birthYear = jumin.substring(0, 2);
if(gender == "1" || gender == "2") {
    birthYear = "19" + birthYear;
    document.write("출생년도 : " + birthYear);
} else{
    birthYear = "20" + birthYear;
    document.write("출생년도 : " + birthYear);
}
birthYear = Number(birthYear); 

let today = new Date(); // 날짜 객체 만들기
// let currYear = today.getFullYear(); YYYY
document.write((today.getFullYear()-age)); // 현재 연도에서 태어난 년도 빼기




