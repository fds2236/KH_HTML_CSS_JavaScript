let btn = document.querySelectorAll("label>button")
let value, warning;

let check = [false, false, false, false];

let regId = /^(?=.*[a-zA-z])(?=.*[0-9]).{8,20}$/;
let regPwd = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
let regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
let regPhone = /^\d{3}-\d{3,4}-\d{4}$/;

btn.forEach(e => {
    e.addEventListener("click",function(){
        value = e.previousSibling.value;
        warning = e.nextSibling;

        if(e === btn[0]){
            checkID();
        } else if(e === btn[1]){
            checkPwd();
        } else if(e === btn[2]){
            checkEmail();
        } else if(e === btn[3]){
            checkPhone();
        }
        if(!check.includes(false)) document.querySelector("form>button").disabled = false;
        else document.querySelector("form>button").disabled = true;
    });
});

let checkID = function (){
    if(regId.test(value)){
        check[0] = true;
        warning.innerText = "사용가능한 아이디";
        warning.style.color = "white";
    } else{
        check[0] = false;
        warning.innerText = "대소문자, 숫자 포함 8자리 이상 20자리 이하로 작성";
        warning.style.color = "rgb(207, 0, 0)";
    }
}
let checkPwd = function (){
    if(regPwd.test(value)){
        check[1] = true;
        warning.innerText = "사용가능한 비밀번호";
        warning.style.color = "white";
    } else{
        check[1] = false;
        warning.innerText = "대소문자, 숫자, 특수문자 포함 8자리 이상 20자리 이하로 작성";
        warning.style.color = "rgb(207, 0, 0)";
    }
}
let checkEmail = function (){
    if(regEmail.test(value)){
        check[2] = true;
        warning.innerText = "사용가능한 이메일";
        warning.style.color = "white";
    } else{
        check[2] = false;
        warning.innerText = "이메일 형식 오류";
        warning.style.color = "rgb(207, 0, 0)";
    }
}
let checkPhone = function (){
    if(regPhone.test(value)){
        check[3] = true;
        warning.innerText = "사용가능한 전화번호";
        warning.style.color = "white";
    } else{
        check[3] = false;
        warning.innerText = "전화번호 형식 오류";
        warning.style.color = "rgb(207, 0, 0)";
    }
}

const autoHyphen = (t) => {
t.value = t.value
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
}
