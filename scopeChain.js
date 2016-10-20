
function c() {

    var myVar = 34;


    function b() {
        console.log(myVar);
    }

    function a() {
        var myVar = 2;
        b();
    }

    a();

}

var myVar = 1;


c();




