let distance =-1;

if (distance >=0 && distance <=100){
    console.log("Pay 5 USD");
} else if (distance >=101 && distance <=500){
    console.log("Pay 10 USD");
}else if(distance >=501 && distance <=1000){
    console.log("Pay 20 USD");
}else if(distance >=1001 ){
    console.log("Pay 40 USD");
}else{
    console.log("Unknown distance");
}


let income = -10;

if (income <=5999){
    console.log("Monthly contribution is 150.00");
}else if(income >=6000 &&  income <=7999 ){
    console.log("Monthly contribution is 300.00");
}else if(income >=8000 && income<=11999){
    console.log("Monthly contribution is 400.00");
}else if(income >=12000 && income <=14999){
    console.log("Monthly contribution is 500.00");
}else if(income >=15000 && income <=19999){
    console.log("Monthly contribution is 600.00");
}else if(income >=20000 && income <=24999){
    console.log("Monthly contribution is 750.00");
}else if(income >=25000 && income <=29999){
    console.log("Monthly contribution is 850.00");
}else if(income >=30000 && income <=49999){
    console.log("Monthly contribution is 1000.00");
}else if(income >=50000 && income <=99999){
    console.log("Monthly contribution is 1500.00");
}else if(income >100000){
    console.log("Monthly contribution is 2000.00");
}else{
    console.log("Too little Income");
}