// global scope
let name ="Duncan";
 function greet(){
    console.log(`Good Afternoon ${name}`)
 }
 greet()

//  function  scope
function sayHello(){
   let message= "Hello"
   console.log(message)
} 
sayHello()   

// block code
{
   let x = 10;
   console.log(x)
}
 