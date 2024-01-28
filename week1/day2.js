/**
 * @Logical_Operators
 * @STRICTLYEQUAL ->==
 * @AND -> &&
 * @OR -> //
 * @GREATERTHAN -> >
 * @LESSTHAN -> <
 * @GREATERTHANEQUAL -> >=
 * @LESSTHANEQUAL -> <=
 * @NOT -> !
 * @NOTEQUAL -> !==
 *
 * 
 * && all logic is true
 * // one logic should be true
 */


// let name = 'Peter'

// switch( name ) {
//     case 'Peter' :
//     console.log('I am Peter')
// } case { 
    
// }
//


// let name = 'Hello'
// function consoleHello() {
//     console.log('hello')
// }

// consoleHello()




//FOR LOOP
//  for (let i = 0; i< 10; i++ ){
// console.log(i)

//  }


let n = parseInt(prompt("End point number?"))
let sum = 0 


for (let i = 1; i<n ; i++ ) {
{

    if(i % 3=== 0 || i % 5===0) {
        sum = sum + i;
    }
    
}
}console.log(sum)