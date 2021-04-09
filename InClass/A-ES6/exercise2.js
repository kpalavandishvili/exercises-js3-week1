class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ' + this.name);
  }
}

let p = new Polygon('Polygon', 300, 400);
p.sayName();
console.log('The area of this polygon is ' + p.area);


class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
    this.sides = 4;
    //this.area = this.height * this.width;
  }
  get area() { return this.width * this.height; }
  sayName() {
    console.log('Hi I am a polygon and my name is ' + this.name + '.');
  }
}

let r = new Rectangle(50, 60);
r.sayName();
//r.area = 3;
console.log('The area of this polygon is ' + r.area);



//Create 2 new classes that extend from polygon: triangle and circle and log their names and areas

// class Tringle
class Triangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Tringle";
    this.sides = 3;
  }
  get area() {
    return this.width * this.height / 2
  } // 10 * 10 / 2 = 50 => 'The area of this polygon is  50'
  sayName() {
    console.log('Hi I am a polygon and my name is ' + this.name + '.');
  }

}

const tringle = new Triangle(10, 10);
tringle.sayName();
console.log('The area of this polygon is ' + tringle.area);

// class Circle

class Circle extends Polygon {
  constructor(height) {
    super(height); // calls the parent constructor
    this.name = "Circle";
  }
  get area() {
    return (this.height * this.height * Math.PI) // PI =3.14... S = PI * r2
  }
  sayName() {
    console.log('Hi I am a polygon and my name is ' + this.name + '.');
  }
}
const circle = new Circle(20)
circle.sayName()
console.log('The area of this polygon is ' + circle.area);

