function printHelp(){  
  console.log("server is (c) Raf");
  console.log("this is my node app");
  console.log("node server.js --file=<NAME>     reads the filename you provided"  );
}
// argv represent what arguemnt in the command line we are talking about 
// 0. node 1.server.js 2.file
const args = require("minimist")(process.argv.slice(2),{ string: "file"})

if (args.help || !args.file) { 
  return printHelp(); 
  // need to end script
  process.exit(1)
}

const hello = require("./2.js")
//console.log("Hello World")
const contents = hello.say(args.file);
console.log(contents.toString());