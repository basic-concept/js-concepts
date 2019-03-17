var myArray=[1,2,4,5,6,7]
myArray.test = 'name'
for (let value of myArray){
    console.log(value)
}
for (let value in myArray){
    console.log(value)
}

var myObject={
    a:1,
    b:2,
    c:3
}
for (let key in myObject) {
    console.log(key);
}
console.log(Object.keys(myObject))
