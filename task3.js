// given arr=[1, 2, 3];write a nested loop to print
let arr =[1, 2, 3];
const num =1;
const two =2;
const three=3;
for(x=1;x<=3;x++){
    console.log(`${num} ${x}`)
    for(x=1;x<=3;x++){
    console.log(`${two} ${x}`)}
    for(x=1;x<=3;x++){
    console.log(`${three} ${x}`)}
}

// write a function reverseIflong(word).if word > length4 reverse it otherwise return "Too short"

function reverseIflong(word){
    if (word > 4){
        console.log("word")
    }else {
        console.log("Too short")
    }
}
reverseIflong()

// console.log("Too short")

// // PRINT the negative number in the array

// function stopAtnegative(){
//     let array=[4, 7, 2, -5, 9]
//     for(let x=0;x<array.length;x++){
//         if (x<1)
//             break
//     }
// }
// console.log(array)
// stopAtnegative()



// output
function printPattern(n){
 n =3
const value=1
for(x=1;x<=3;x++){
    console.log(`${value}`)
    for(x=1;x<=2;x++){
    console.log(`${value} ${x}`)
 }
    console.log(`${value} ${x} ${n}`)
}
}
printPattern()

function mystery(){
let array=[3,6,4,9,0,12]
let sum = 0;
    for(x=1;x< array.length;x++){
        let x=array
        if (x%3==0){
            sum+=array
        }if(array=0){
            break}
    }
}
console.log(sum)
mystery()
