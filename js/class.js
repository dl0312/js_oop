class Person {
  constructor(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return this.first + this.second;
  }
}

class Student extends Person {
  constructor(name, first, second, third) {
    super(name, first, second);
    this.third = third;
  }
  sum() {
    return this.first + this.second + this.third;
  }
  avg() {
    return (this.first + this.second + this.third) / 3;
  }
}

var kim = new Person("kim", 10, 20);
console.log(kim);
console.log(kim.sum());
var lee = new Person("lee", 10, 10);
console.log(lee);
console.log(lee.sum());
var park = new Student("park", 0, 50, 100);
console.log(park);
console.log(park.sum());
console.log(park.avg());
