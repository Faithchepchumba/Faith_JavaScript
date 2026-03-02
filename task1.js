for(let x=1;x < 20 ;x++){
    if(x %2 !==0)
    console.log(x)
}

for(let x = 10; x >=1; x--){
    console.log(x)
}

// mult table of 5
const num =5

for(let x= 1; x <=10; x++) {
    console.log(`${num} * ${x} = ${num * x}`)
}

// print the largest number
let numbers =[10,20,4,45,99,1];
let largest =numbers[0]
for(let x= 0;x < numbers.length;x++){
    if(numbers[x] > largest){
        largest=numbers[x]
    }
}
console.log(largest)

// let number =[10,20,4,45,99,1];
// number.sort()
// number.reverse()
// console.log(number)


