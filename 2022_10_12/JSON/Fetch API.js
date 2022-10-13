// id가 1인 데이터 조회
fetch("https://jsonplaceholder.typicode.com/posts/")
.then((response) => response.json())
.then((json) => console.log(json));

// 데이터 생성 : POST
// fetch("https://jsonplaceholder.typicode.com/posts/", {
//     method : "POST", // 기본적으로 적지 않으면 get타입이 들어옴
//     body : JSON.stringify({
//         title : "JSON Test",
//         body : "JSON과 비동기 통신에 대해서 연습해봅시다.",
//         userId : 1
//     }),
//     headers: {
//         "content-type": "application/json; charset=UTF-8"
//     }
// })
// .then((rsp) => rsp.json())
// .then((json) => console.log(json));

// 데이터 수정 : PUT
// 수정하고자하는 데이터 지정 => posts/1
// fetch("https://jsonplaceholder.typicode.com/posts/1",{    
//     method : "PUT",   
//     body : JSON.stringify({
//     id : 1,
//     title : "Fetch API test",
//     userId : 1
//     }),
//     headers : {
//         "content-type" : "application/json; charset=utf-8"
//     }
// })
// .then((rsp) => rsp.json())
// .then((json) => console.log(json));

// // 데이터 삭제 : DELETE
// fetch("https://jsonplaceholder.typicode.com/posts/1",{    
//     method : "PUT"
// });
