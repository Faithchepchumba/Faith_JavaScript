let number = [1,2,3,4,5,6,7,8,9]
let reversed =[]
for(let num=number.length-1;num >=0;num--){
    reversed+=number[num]
}
console.log(reversed)

let values=[2,12,4,7,15,20]
let even =0
for(let x=0;x< values.length;x++){
    let nums = values[x]
    if (nums%2==0){
        even++
    }
}
console.log(even)

const word=5;
for(let x=1;x<=15;x++){
    console.log(`${word} *${x}= ${word * x}`)
}

let list =[1,2,2,3,4,5,5,5,2,6];
let unique=[];
for(let x =0;x<list.length;x++){
     let isDuplicate = false;
}
    for(let z=0;z < unique.length;z++){
        if(list[x]===unique){
        // console.log(`The array is ${unique}`)
     isDuplicate=true;
     break;
        }
    }
    if (!isDuplicated){
    unique.push(list[x])
    }
console.log("The array is ",unique)