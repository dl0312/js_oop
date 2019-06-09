class Person {
  constructor(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
  }
  sum() {
    return this.first + this.second + this.third;
  }
}

var kim = new Person("kim", 10, 20, 30);
console.log(kim);
console.log(kim.sum());
var lee = new Person("lee", 10, 10, 10);
console.log(lee);
console.log(lee.sum());
