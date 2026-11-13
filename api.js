const user = {
    name: "Prince Kumar",
    age: 18
}

const finalString = JSON.stringify(user)
console.log(finalString);
console.log(finalString.name + " " + finalString.age)
const obj = JSON.parse(finalString)
console.log(obj);
console.log(obj.name + " " + obj.age);

