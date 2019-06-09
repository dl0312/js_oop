var memberArray = ["john", "mike", "lisa"];

var memberObject = {
  manager: "mike",
  developer: "john",
  designer: "lisa"
};

console.group("object loop");
for (var name in memberObject) {
  console.log(name, memberObject[name]);
}

console.groupEnd("object loop");
