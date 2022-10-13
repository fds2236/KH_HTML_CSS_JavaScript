let memberInfo = [
    {
        name : "이영지",
        age : 21,
        job : "래퍼",
        addr : "서울시 강남구 역삼동"
    },
    {
        name : "미미",
        age : 24,
        job : "오마이걸",
        addr : "서울시 강남구 청담동"
    },
    {
        name : "안유진",
        age : 20,
        job : "아이브",
        addr : "서울시 강남구 삼섬동"
    }
];

// 다른 프로그래밍 언어와의 데이터 송수신을 하기 위해 js언어를 제이슨 포맷으로 바꿈
console.log(memberInfo); // 리터럴 객체
// 제이슨 포맷 => 서버로 날려줄 수 있도록 객체를 문자열로 데이터 포맷
let json = JSON.stringify(memberInfo); 
console.log(json); 
// 서버에서 날려준 것을 다시 리터럴 객체로 바꾸주기
let objectJson = JSON.parse(json);
console.log(objectJson);

