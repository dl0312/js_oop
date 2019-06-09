console.log(Math.PI);
console.log(Math.random());
console.log(Math.floor(3.9));

console.log(Math.__proto__ === Object.prototype); // true

var MyMath = {
  PI: Math.PI,
  random: function() {
    return Math.random();
  },
  floor: function(val) {
    return Math.floor(val);
  }
};

console.log(MyMath.__proto__ === Object.prototype); // true
