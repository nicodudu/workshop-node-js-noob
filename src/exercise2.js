exports.run = function(input) {
  var array = input.split("")
  var biggest = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > biggest) {
      biggest = array[i]
    } else {
      biggest = biggest
    }
  }
  biggest = parseInt(biggest, 10)
  return biggest
  console.log("Exercise #2");
};
