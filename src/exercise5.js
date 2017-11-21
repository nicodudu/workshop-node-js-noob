exports.run = function(input) {
  var fs = require('fs');
  fs.readdir(input,function(err, files) {
    number = files.length()
  })
  showInProgress: () => console.log("In progress ...");
  showError: () => console.log("Something goes wrong");
  showDone: number => console.log(`Project contains ${number} file(s) of tests`);
  
  console.log("Exercise #5");
};
