class Shape {
  constructor(name) {
    this.name = name;
  }

  area() {
    return "Area calculation not defined";
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(`Shape: ${circle.name}`);
console.log(`Area: ${circle.area().toFixed(2)}`);
