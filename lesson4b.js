let greet = function (){
    console.log("Welcome to the world of Impossibilities")
}
console.log(typeof(greet))
greet();

(function() {
    console.log("This is invoked without calling it")
})();