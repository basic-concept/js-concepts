//arguments对象的主要作用是允许我们访问传递给函数的所有参数

Function.prototype.myBind = function (thisArg) {
    if (typeof this !== "function"){
        return
    }
    var _self = this;

    var args = [].slice.call(arguments,1)
    var fnNop = function () {}   // 定义一个空函数
    var fnBound = function () {
        var _this = this instanceof _self? this :thisArg
        console.log(this instanceof _self)
        console.log(_this)
        return _self.apply(_this,Array.prototype.concat(args,[].slice.call(arguments)))
    }
    if (this.prototype) {
        fnNop.prototype = this.prototype;
    }

    fnBound.prototype = new fnNop();
    return fnBound;
    // return function () {
    //     return _self.apply(thisArg,Array.prototype.concat(args,[].slice.call(arguments)))
    // }
}

function foo(name,pass) {
    this.name = name;
    this.pass = pass;
}

var obj = {
    nickName: 'nickName'
}

var bar = foo.myBind(obj)
bar('barff','fff')
// var bar1 = foo.bind(obj)
// bar1('barff1','fff1')

// console.log(obj)
// console.log(obj.name)
// console.log(obj.pass)



var obj = {};
var bar = foo.myBind(obj);
var alice = new bar('Alice');
console.log(alice.name);    // Alice


function test(...args) {
    console.log(...args)
}
var objt = {}
const newTest = test.myBind(objt,'p1','p2')

newTest('p3','p4')




