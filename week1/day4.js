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


  const arrayObjects = [
    {name : 'Alice', age : 25 ,city: 'New York'},
    {name : ' Bob', age : 30, city : 'Chicago'},
    {name : ' Cahrlie', age: 35 , city : 'New York'},
    {name : 'Dave', age: 40, city: 'Chicago'},
];


const result = Object.groupBy(arrayObjects, ({age})  => age) 
console.log(result)

