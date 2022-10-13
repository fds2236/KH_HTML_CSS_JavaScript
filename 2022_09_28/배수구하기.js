// 1.
// 성적점수 입력받아 90점이상 a, 80점 이상 b, 70점 이상 c, 60점 이상 d, 나머지 f
// 0~100점 사이가 아니라면 입력 오류 출력
// let score = prompt("성적을 입력하시오");
// score = Number(score);
// if(score >= 90 && score <= 100){document.write("<h3>A등급입니다.</h3>");}
// else if(score >= 80 && score < 90){document.write("<h3>B등급입니다.</h3>");}
// else if(score >= 70 && score < 80){document.write("<h3>C등급입니다.</h3>");}
// else if(score >= 60 && score < 70){document.write("<h3>D등급입니다.</h3>");}
// else if(score >= 0 && score < 60){document.write("<h3>F등급입니다.</h3>");}
// else {document.write("<h3>성적을 잘못입력하셨습니다.</h3>");}

/* 강사님 코드 */
// let score;
// while(true) {
//     score = prompt("성적 입력 : ", "");
//     score = Number(score);
//     if (score < 0 || score > 100) {
//         alert("입력 오류 : 성적을 다시 입력 하세요.");
//     } else break;}

// if(score >= 90) document.write("<p class='score'>A</p>");
// else if (score >= 80) document.write("<p class='score'>B</p>");
// else if (score >= 70) document.write("<p class='score'>C</p>");
// else if (score >= 60) document.write("<p class='score'>D</p>");
// else document.write("<p class='score'>F</p>");

//2.
//정수 n을 입력받아 n * n 행렬 출력하기(반복문, 조건문)
//예) 3을 입력
//1 2 3
//4 5 6
//7 8 9
// let n = prompt("정수 n을 입력하시오");
// n = Number(n);
// for(let i = 1; i <= n * n; i++){
//     document.write(" "+ i +" ");
//     if(i % n == 0) document.write("<br>");
// }

//3.
//1~1000사이의 7의 배수를 구하고 한 줄에 10개씩 출력하기
// for(let i = 1; i <= 1000; i++) {
//     if(i % 7 == 0) {
//         document.write("<span class=double>"+" "+ i +" "+"</span>");
//         if(i % 70 == 0) {
//             document.write("<br>");
//         }
//     }
// }