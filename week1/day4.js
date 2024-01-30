// let person = {
//     name: "John" ,
//     age : 30 ,
//     isStudent : false
//     const 

// }

// console.log(person.name)
// console.log (person.age)
// console.log(person.isStudent)

// let person = {
// name : "John",
// age :30, 

//  greet : function() {
//     console.log(`Hello , ${this.name}!`)
//  }
// }

// console.log(person.greet())

// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//     console.log(number* 5);
// });

// console.log(numbers.forEach(Number));

// let fruits = ["apple", "banana", "cherry"];


// adding elements 

// fruits.push("date")
// fruits.unshift("kiwi")
// fruits.pop()


// console.log(fruits)


// function groupBy ( name, age, city) {

// name = ['Alice', 'Bob', 'Charlie', 'Dave']
// age = [ 25, 30, 35 , 40]
// city = ['New York', 'Chicago', 'New York', 'Chicago']

// }   

// console.log(groupBy.name())


 

// let person = {
// name : 'John',
// age :30
// school : 'Zindua school',
// personalities : ['kind', 'humble', 'hardworking'],
// stubborn : false,
// hobbies : {
//   indoor : ['reading', 'cooking'],
//   outdoor : ['swimming', 'hicking']
 let people = [
    {name : 'Alice', age : 25 ,city: 'New York'},
    {name : ' Bob', age : 30, city : 'Chicago'},
    {name : ' Cahrlie', age: 35 , city : 'New York'},
    {name : 'Dave', age: 40, city: 'Chicago'},
];

function groupBy (arr, property) {
let grouped = {}
for (let i=0; i<people.length; i++){
  let person= arr[i]
  let key  = person[property]
 
  if ( ! grouped[key] ) {
   grouped[key] =[person]
  } else {
    grouped[key].push(person)
  }
}
return grouped
}

console.log(groupBy(people, 'age'))

// sound : function () {

//   return('I am a human being')
  
// }

// }

// console.log(person.name)
// console.log(person.sound())
// console.log(person.personalities[2])
// console.log(person.hobbies.indoor[1])
// console.log(person.hobbies.outdoor[1])
// console.log(person)

// console.log(Object.keys(person))
// console.log(Object.values(person))

// var x = prompt('where does the pope live?');

// if (x=== "vatican") {
//   alert('correct');

// }
//  else {
 
//   (

//   )

//  }


