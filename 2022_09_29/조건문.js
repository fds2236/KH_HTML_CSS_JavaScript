// // 조건문 : 조건식의 결과가 참인 경우 수행

// // if(조건식) {참인 경우 수행되는 명령문} else{거짓인 경우 수행되는 명령문}
// let num = 10;
// if(num >= 0) console.log("양수입니다."); else console.log("음수입니다.");

// if(num > 10) console.log(num + "은 10보다 커요."); 
//     else if(num = 10) console.log(num + "은 10과 같아요.");
//     else console.log(num + "은 10보다 작아요.");

// // switch문
// let a, b, op, tmp;
// tmp = prompt("값 입력 : ", "");
// a = Number(tmp);
// op = prompt("연산자 입력 : ", "");
// tmp = prompt("값 입력 : ", "");
// b = Number(tmp);

// // switch문의 op자리에는 조건은 올 수 없고 값만 올 수 있음(문자열 가능)
// switch(op) {
//     case "+" :
//         document.write("덧셈 : " + (a+b));
//         break;
//     case "-" :
//         document.write("뺄셈 : " + (a-b));
//         break;
//     case "*" :
//         document.write("곱셈 : " + (a*b));
//         break;
//     case "/" :
//         document.write("나눗셈 : " + (a/b));
//         break;
//     default :
//     document.write("계산식 오류");
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 주민등록번호 입력받아 성별, 나이 출력하기
// 문자열을 자르는 substr사용
// 날짜 계산을 위해Date 내장 객체 사용

// 주민등록번호 입력 길이 체크
// 하이픈 포함 여부 체크
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 숫자1,2 1900년대생
// 숫자3,4 2000년대생

let number, gender;
number = prompt("주민등록번호를 입력하세요."); // 아마 스트링 타입으로 들어옴
gender = number.substr(7, 1); // 주민번호 뒷자리 2개!
age = number.substr(0,2); // 태어난 연도

let today = new Date();


// 성별 출력하기
// 123456-890000(13자리)
switch(gender) {
    case "1" : 
    document.write("<p>" + "성별 : 남성 " + "</p>");
    break;
    case "2" :
    document.write("<p>" + "성별 : 여성 " + "</p>");
    break;
    case "3" :
        document.write("<p>" + "성별 : 남성 " + "</p>");
        break;
    case "4" :
            document.write("<p>" + "성별 : 여성 " + "<p>");
            break;
    default :
    document.write("외국인입니다.");
};

if(gender == "1" || gender == "2") {
    age = "19" + age;
document.write("<p>" + "출생년도 : " + age + "</p>");

} else if(gender == "3" || gender == "4") {
    age = "20" + age;
   document.write("<p>" + "출생년도 : " + age + "</p>");
   
} else{
    document.write("외국인입니다.")
}


age = Number(age);
document.write(today.getFullYear()-age + "세");