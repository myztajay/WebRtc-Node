const fs = require("fs");
const say = (filename) => {
  return  fs.readFileSync(filename)
}


module.exports.say = say;