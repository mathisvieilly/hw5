class Square {
    constructor(side) {
        this.side = side;
    }
    perimeter() {
        return this.side * 4;
    }
    area() {
        return this.side * this.side;
    }
    diagonal() {
        return Math.sqrt(2) * this.side;
    }
    describe() {
        return `Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()} and diagonal of ${this.diagonal().toFixed(3)}`;
    }
}

const square1 = new Square(2);
const square2 = new Square(5);
const square3 = new Square(10);

console.log(square1.describe());
console.log(square2.describe());
console.log(square3.describe());