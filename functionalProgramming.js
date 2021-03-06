
function mapForEach(arr, fn) {

    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };
    return newArr;
}


var arr1 = [1, 2, 3];
console.log;

var arr2 = mapForEach(arr1, function (item) {
    return item * 2;
});

var arr3 = mapForEach(arr1, function (item) {
    return item > 2;
});

console.log(arr2);
console.log(arr3);

var checkPastLimit = function (limiter, item) {
    return item > limiter;
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));

console.log(arr4);

var checkPastLimitedSimplified = function (limiter) {
    return function (limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPastLimitedSimplified(2));
console.log(arr5);

var arr6 = _.map(arr1, function(item) {return item * 3;});
console.log(arr6);

//tests to see if a particular function of Underscore library is loaded 
if(typeof _ === 'function') {
  if(typeof _.filter !== 'undefined') {
    console.log('under_score_function_loaded');
  }
}

var arr7 = _.filter([2,3,4,5,6,7], function(item) {return item % 2 === 0;});
console.log(arr7);

