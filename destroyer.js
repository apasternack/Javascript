
function destroyer(arr) {
  //constructs a real array from arguments object
  var args = Array.prototype.slice.call(arguments);

  var arrayOfNumbers = arguments[0];
  
  console.log('arr = ' + arr);
  console.log(arrayOfNumbers);
  console.log(args);

  //create an array with values to be removed
  valuesToRemove = args.splice(1,2);

  var removeValue = function(valueToDestroy, value) {
      return value !==arguments[i];
    };
  
var isBigEnough = function (value, i) {
  return value >= (2 + i);
}

  for(var i = 0; i < valuesToRemove.length; i ++) {
    
    arrayOfNumbers = arrayOfNumbers.filter(isBigEnough);
    
  }
  

  
  return arrayOfNumbers;
}


console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
