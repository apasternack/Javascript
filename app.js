
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


if(typeof _ === 'function') {
  if(typeof _.reduce !== 'undefined') {
    console.log('under_score_not_loaded');
  }
}