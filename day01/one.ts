const util = require("../helpers/io");

let result = util.readFile(__dirname, 'input.txt');
console.log(result)
// util.asyncCall();
result.then(
    (data) => {
        console.log(data);
    },
    (err) => {
        console.log(err);
    }
);

// let fs = require('fs'),
//         path = require('path'),
//         filePath = path.join(__dirname, 'input.txt')

// fs.open(filePath, "r", function (err, f) {
//   if (err) {
//     return console.error(err);
//   } else {
//     console.log(f);
//     console.log("File opened!");
//     fs.readFile(f, {encoding: "utf-8"}, function(err,data) {
//       if (err) {
//         console.log(err)
//       } else {
//         console.log('received data!');
//       }
//     })
//   }
// })
