// 计算func(1)(2)(3)    func(1,2)(3)    func(1)(2,3)    func(1,2,3)

var func = function () {
    var args = [].slice.call(arguments);
    console.log(arguments)
    console.log(args)

    var adder = function () {
        var _adder = function () {
            args.push(...arguments)
            return _adder;
        }

        _adder.toString = function () {
            return args.reduce(function (a,b) {
                return a+b
            })
        }

        return _adder
    }

    return adder(...args)
}

var a = func(1)(2)(3).toString()
console.log(a)
