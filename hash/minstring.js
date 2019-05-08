function getRareChar(str) {
    let hash = {};
    let len = str.length;
    for (let i =0;i<len;i++){
        hash[str[i]] = hash[str[i]] || {index: i,count: 0}
        hash[str[i]].count++
    }
    let hashx = Object.keys(hash).map(function (key) {
        return Object.assign({char: key},hash[key])
    }).sort(function (a, b) {
        return a.count - b.count
    }).filter(function (e, i, array) {
        return e.count === array[0].count
    }).sort(function (a, b){
        return a.index - b.index
    })[0].char


    return hashx
}

var str = 'ab1f48eoncpoijbghnvcstcjsbssvccccsfnxkksnbtewidgb25673'
console.log(getRareChar(str))
