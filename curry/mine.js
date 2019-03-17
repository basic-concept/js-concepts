function add() {
    var args = [].slice.call(arguments)

    var adder = function () {
        var _adders = function(){
            args.push(...arguments);
            return _adders;
        }

        _adders.valueOf = function () {
            return args.reduce(function (a,b) {
                return a+b;
            })
        }
        return _adders;
    }
    return adder(...args);
}


var a = add(6)(2)(3)(1).valueOf();
var b = add(6, 2, 3, 1).valueOf();
var c = add(6, 2)(3, 1).valueOf();
var d = add(6, 2, 3)(1).valueOf();
var e = add(6, 2)(3)(1).valueOf();

console.log(a,b,c,d,e)


Array.map()
