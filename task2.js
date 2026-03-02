// given a word "javascript" loop to count vowels in the word

let word= "javascript";
let count = 0;

for(let index = 0; index < word.length ;index++){
    let letter = word[index];
    if(letter ==='a'|| letter ==='e'|| letter ==='i'|| letter ==='o'|| letter ==='u'){
        count++
    }
}
 console.log(count)
//  loop number whe divisible by 7 and stop
for(let x =1; x<= 20; x++){
    if (x %7 ==0){
        console.log(`loop stops at ${x}`)
        break
    }
}      
// given a word  "loop" use a loop to reverse it
let new_word= "loop";
let reversed =""
for (let letter =new_word.length-1;letter >= 0; letter--){
    reversed +=new_word[letter]
}
console.log(reversed)
    
// calculate the total
let nums=[2,4,6,8];
let sum = 0;
for(let x=0 ;x<nums.legth;x++){
    sum += nums[x]
} 
console.log(sum)
// loop to count how many odd numbers are in the array
let values= [3, 7,10, 13, 18,21];
let odd_nums =0;
for (let x=0; x< values.length;x++){
    let number = values[x];
    if (number%2 !=0){
        odd_nums++
    }
}
console.log(odd_nums)

// smallest number
let numbers =[12, 45, 7,89, 23];
let smallest = numbers[0]
for(let x=0;x <numbers.length;x++){
    if(numbers[x]< smallest){
        smallest=numbers[x]
    }
}
console.log(smallest)

let names =["Duncan", "Grace","Brian","Mercy"];
let found= false;
for(let name =0; name< names.length; name++){
    if (names[name] ==="Mercy"){
        console.log(`Found at index ${name}`)
        found = true;
        break
    }
}

if (!found) {
    console.log("Not Found")
}
