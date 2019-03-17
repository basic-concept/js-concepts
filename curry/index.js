function _add(a) {
    return function (b) {
        return function (c) {
            console.log(a+b+c);
            return a+b+c;
        }
    }
}

// _add(1)(2)(3)
// _add(1)(2,3)
// _add(1,2)(3)
// _add(1,2,3)

function createCurry(func, args) {
    var arity = func.length;
    var args = args || [];

    return function () {
        var _args = [].slice.call(arguments);
        [].push.apply(_args,_args);

        if(_args.length < arity){
            return createCurry.call(this,func,_args)
        }

        return func.apply(this,_args)
    }
}

function addNow(a,b,c) {
    return a+b+c;
}

var args = [1,2,3,4]
// console.log(addNow.apply(null,args))
// console.log(addNow(...args))


function addCurry() {
    var _args = [].slice.call(arguments)

    var adder = function () {
        var _adder = function () {
            _args.push(...arguments);
            return _adder;
        }

        _adder.toString = function () {
            return _args.reduce(function (a,b) {
                return a+b;
            })
        }

        return _adder;
    }

    return adder(..._args)
}
var a = addCurry(6)(2)(3)(1).toString();
var b = addCurry(6, 2, 3, 1).toString();
var c = addCurry(6, 2)(3, 1).toString();
var d = addCurry(6, 2, 3)(1).toString();
var e = addCurry(6, 2)(3)(1).toString();
console.log(a,b,c,d,e)

