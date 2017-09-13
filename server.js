function printHelp(){
  console.log("server is (c) Raf");
  console.log("this is my node app");
  console.log("so i cant help u");
}
var args = require("minimist")(process.argv.slice(2),{ string: name})

if (args.help || !args.name) { 
  return printHelp(); 
  process.exit(1)
}
var name = args.name
//console.log("Hello World")
process.stdout.write("Hello " + name);