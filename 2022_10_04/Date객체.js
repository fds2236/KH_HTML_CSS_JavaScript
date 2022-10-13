// 날짜와 시간을 다루는 Date객체
const date = new Date();
console.log(date); // 현재 년, 월, 일, 시간 출력(영국 그리니치 천문대시간기준(세계표준시의 기준), 9시간 차이)

const date1 = new Date(2022, 10, 04);
console.log(date1); // 출력 : 2022-11-03T15:00:00.000Z(달은 1달이 빠짐 배열은 0부터 시작하니까)

const date2 = new Date(2022, 10, 04, 16, 20, 50);
console.log(date2);

const date3 = new Date("2022-10-04"); // 원하는 달로 입력됨
console.log(date3);

const date4 = new Date("2022/12/25/18:30:50"); // 원하는 달로 입력됨
console.log(date4);
// 가급적 ,로 넣으면 배열의 인덱스로 들어가기 때문에 - 또는 /로 넣어주는 것이 좋음

// 연도 출력
console.log(date.getFullYear());
// 월 출력
console.log(date.getMonth()); // 출력 : 9 => 왜? 배열의 인덱스로 반환됨을 유의, +1을 해줘야 원하는 월
