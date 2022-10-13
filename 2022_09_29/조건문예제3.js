// 길이 체크, 하이픈이 있는지 체크
// 성별 확인 123456-1234567
// 현재 년도 - 태어난 년도 = 나이
let jumin;
while(true) {
    jumin = prompt("주민등록번호 : ", "");
    if(jumin.length != 14) alert("입력 오류 : 다시 입력 하세요.");
    else {
        if(jumin.indexOf("-") == -1) alert("하이픈이 누락되었습니다");
        else break;
    }
}
let gender = jumin.charAt(7); // 문자열에서 해당 인덱스 문자를 추출
let genderStr;
if (gender == "1" || gender == "3") genderStr = "남성";
else genderStr = "여성";

let birthYear = jumin.substring(0, 2); // 주민등록번호에서 맨앞에 2자를 잘라냄
if(gender == "1" || gender == "2") { // gender가 1 또는 2이면 19xx년에 출생
    birthYear = "19" + birthYear;
} else birthYear = "20" + birthYear; // 20xx년도 출생
birthYear = Number(birthYear); // 계산을 위해 태어날 년도 문자열을 숫자로 변경

const date = new Date(); // 날짜 객체 만들기
const currYear = date.getFullYear(); // 2022
let age = currYear - birthYear; // 현재 년도에서 태어난 년도 빼면 나이가 됨

document.write("<p class='box'> 성별 : " + genderStr + "<br>" + "나이 : " + age + "</p>");