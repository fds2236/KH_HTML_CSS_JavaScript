// 생성자를 만드는 방법
// 1. 함수 선언문으로 정의하는 방법(옛날 방식)
function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}
Card.prototype.show = function() {
    console.log(this.suit + this.rank);
}

let card = new Card(5,5);
card.show();

// 2. 클래스 선언문으로 정의하는 방법
class Card{
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    show() {
        console.log(this.suit + this.rank);
    }
}
let card1 = new Card(100, 200);
card1.show();

// 3. 함수 표현식으로 정의하는 방법
let Card = function(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}

Card.prototype.show = function() {
    console.log(this.suit + this.rank);
}

// 4. 클래스 표현식으로 정의하는 방법
let Card = class {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    show() {
        console.log(this.suit + this.rank);
    }
}