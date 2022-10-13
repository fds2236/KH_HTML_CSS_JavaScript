function newRegister() {
    let newItem = document.createElement("li"); // 요소 노드 추가
    let subject = document.querySelector("#subject"); // 폼의 텍스트 필드
    let newText = document.createTextNode(subject.value); // 텍스트 필드의 값으로 텍스트 노드 만들기
    newItem.appendChild(newText);
    let itemList = document.querySelector("#itemList"); // ul태그를 찾음
     // insertBefore 자식 요소 중 맨 앞0번째에 넣기
    itemList.insertBefore(newItem, itemList.childNodes[0]); // 여기서 li 요소 노드 연결
    subject.value = "";
    let items = document.querySelectorAll("li");
    for(let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function(){
            if(this.parentNode) {// 부모 노드가 있다면
                this.parentNode.removeChild(this);
            }
        });
    }
}

