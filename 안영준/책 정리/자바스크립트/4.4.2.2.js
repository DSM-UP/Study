/*var test = '1234';
console.log(window.test);
var sayfoo = function(){
    console.log(this.test);
}
sayfoo();*/
/*
var value = 100;
var myobject = {
    value: 1,
    func1: function(){
        var that = this;
        this.value +=1;
        console.log('func()called, this.value: ' + that.value);

        func2 = function(){
            this.value +=1;
            console.log('func2()called, this.value: ' + that.value);

            func3 = function(){
                this.value +=1;
                consolelog('func3()called, this.value: ' + that.value);
            }
            func3();
        }
        func2();
    }  
};
myobject.func1();*/

var Person = function(name){
    this.name = name;
};

var foo =new Person('poo');
console.log(foo.name);
