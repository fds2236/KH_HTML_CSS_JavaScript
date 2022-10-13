function inputVal() {
    let inputValue = document.getElementById("inputValue").value;
    inputValue = word(inputValue);
    document.getElementById("value").innerHTML = inputValue;
}

// 지금 안되는 것!
// function word(value)찍기
// function word : 제대로 돌아가는지 모르겠음

// 소문자 a가 더 큼, 대문자 a가 더 작음
// 입력받은 단어의 i번째 배열이 소문자 a보다 작으면 대문자라는 소리!
// 즉 소문자로 바꿔줘야 함

// 실패
// function word(value) {
//     let arr = [];
//     for(let i = 0; i < value.length; i++) {
//         if(value.charAt(i) < 'a'){arr[i] = (String(value.charAt(i) + ('a' - 'A')));
//         } else arr[i] = (String(value.charAt(i) - ('a' - 'A')))
//     }
// }

function word(str) {
    let newStr = [];
for(let i = 0; i<str.length; i++){
    if(str[i]>='a' && str[i] <='z') {newStr += str[i].toUpperCase();}
    else{newStr += str[i].toLowerCase();}
    return newStr;
}
}
