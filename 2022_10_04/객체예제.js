// 학원 수료일 계산
// 2022-12-26일 종강
let dDay = new Date("2022-12-26");
let now = new Date();
console.log(dDay); // 2022-12-26T00:00:00.000Z
console.log(now); // 2022-10-04T08:09:08.769Z

// getTime() : 1970년 1월 1일 12:00 이후의 시간을 밀리초단위로 표시
let toNow = now.getTime(); // 현재 시점의 시간
let toDay = dDay.getTime(); // 종료 시간
let remainTime = toDay - toNow; 
console.log(toNow); // 1664870948769
console.log(toDay); // 1672012800000
console.log(remainTime); // 7141851231

// 24시간 * 60분 * 60초 * 1000ms
remainTime = Math.round(remainTime/(1000*60*60*24));
console.log(remainTime); // 83
document.querySelector("#result").innerHTML = remainTime;

//html을 객체로 만들어서 트리화시키는 것 중요!