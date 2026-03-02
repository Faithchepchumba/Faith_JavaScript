let age = 16;

if (age < 14){
    console.log("Too young to watch the movie");
} else if(age >= 14 && age < 18){
    console.log("You can watch the movie with a parent");
}else if(age >18 && age < 40){
    console.log("You can watch the movie");
}else {
    console.log("You're too old to watch this movie");
}