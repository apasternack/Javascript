function a() {
    console.log(this);
    this.newVariable = "what the!?";
}

var b = function() {
    console.log(this);
}

a();

console.log(newVariable);

b();


var c = {
    name: 'The c object',
    color: 'red',
    log: function() {
        var self = this;
        self.name = 'Updated c object!!'
        console.log(self);

        var setname = function(newname) {
            self.name = newname;
            console.log(self);

        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log();
