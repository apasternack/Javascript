function buildFunctions() {

    var arr = [];

    for (var i = 0; i < 3; i++) {

        arr.push(
            function () {
                console.log(i);
            }
        )
    }
    console.log(arr);
    return arr;

}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();


arr1 = [];

for (var j = 0; j < 3; j++) {
    // arr1.push(j);
    arr1.push(function() {
        console.log(j);
    })
}
console.log(arr1[0]);
console.log(arr1);
console.log('====================');







function buildFunctions2() {

    var arr = [];

    for (var i = 0; i < 3; i++) {

        arr.push(
            (function (j) {
                return function() {
                    console.log(j);
                }
            }(i))
        )
    }
    console.log(arr);
    return arr;

}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();