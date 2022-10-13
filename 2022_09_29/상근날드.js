// 상덕버거, 중덕버거, 하덕버거
// 콜라, 사이다
// 모든 가격은 100원 이상 2000원 이하
// 세트로 구매시 50원 할인
// 가장 싼 메뉴 가격 출력
// let bur1 = prompt("상덕버거의 가격");
// let bur2 = prompt("중덕버거의 가격");
// let bur3 = prompt("하덕버거의 가격");
// let drink1 = prompt("콜라의 가격");
// let drink2 = prompt("사이다의 가격");
// bur1 = Number(bur1);
// bur2 = Number(bur2);
// bur3 = Number(bur3);
// drink1 = Number(drink1);
// drink2 = Number(drink2);

// document.writeln("버거 가격 : " + Math.min(bur1, bur2, bur3));
// document.writeln("음료 가격 : " + Math.min(drink1, drink2));
// document.writeln("세트 가격 : " + ((Math.min(bur1, bur2, bur3) + Math.min(drink1, drink2))-50) + "원입니다.");

//////////////////////////////////////////////
// 배열이용하기

let menu2 = [];
let tmp;
tmp = prompt("상덕버거의 가격");
menu2[0] = Number(tmp);
tmp = prompt("중덕버거의 가격");
menu2[1] = Number(tmp);
tmp = prompt("하덕버거의 가격");
menu2[2] = Number(tmp);
tmp = prompt("콜라의 가격"); 
menu2[3] = Number(tmp);
tmp = prompt("사이다의 가격");
menu2[4] = Number(tmp);

// while(true){
//     if(menu2 < 100 || menu2 > 2000){
//         alert("입력 오류 : 가격을 다시 입력하세요!");
//     } else break;
// };

let minB = menu2[0];
let minD = menu2[3];


for(let i = 0; i < menu2.length; i++) {
    if((i <= 2) && (minB > menu2[i]))minB = menu2[i];
    if((i >= 3) && (minD > menu2[i]))minD = menu2[i];
}
document.write("<h1>상덕날드's Menu</h1>")
document.writeln("<p>상덕버거의 가격 : " + menu2[0]+"</p>");
document.writeln("<p>중덕버거의 가격 : "  + menu2[1]+"</p>");
document.writeln("<p>하덕버거의 가격 : " + menu2[2]+"</p>");
document.writeln("<p>콜라의 가격 : " + menu2[3]+"</p>");
document.writeln("<p>음료수의 가격 : " + menu2[4]+"</p>");
document.writeln("<p>가장 저렴한 세트메뉴 가격 : " + (minB + minD - 50) + "</p>");