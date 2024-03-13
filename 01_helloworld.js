console.log("hello world");

function add(a, b) {
  return a + b;
}
console.log(add(2, 8));

var args = process.argv.slice(2);
if(args.length >= 2){
    console.log("Adding the number: ", add(parseInt(args[0]), parseInt(args[1])));
} else{
    console.log("Please provide two number as a command-line arguments.")
}
