const person = [{ name : "Joe", age: 20, hasChildren: true}, 
{ name : "Mike", age: 50, hasChildren: false},
{ name : "Ivan", age: 45, hasChildren: true},
{ name : "Katty", age: 23, hasChildren: false},
{ name : "Betty", age: 33, hasChildren: false}]; 

//First Solution
let fPerson = person.length;

for (let i = 0; i < fPerson; i++) {
    if(person.age > 35){
        console.log(person[i]);
    }
}

//Second Solution 
const newPerson = person.filter(function (el) {
    return el.age > 35;
}
);
console.log(newPerson);

//Third Solution 
let fnewPerson = newPerson.length;

for (let i = 0; i < fnewPerson; i++) {
        document.getElementById("demo").innerHTML = JSON.stringify(newPerson);
  }

