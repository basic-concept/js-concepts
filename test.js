// var numberInput = readline();
// var numbers = numberInput.split(" ");
// var numbers = [61,82,93,84,73]
// var result;
// numbers.sort(function(a,b){
//     let aI = parseInt(a);
//     let bI = parseInt(b);
//     if (aI > bI){
//         return 1;
//     } else {
//         return -1;
//     }
// })
// console.log(numbers)

//
// function minCal(a, b, c) {
//     for (let k =a;k<=a*b*c;k++){
//         if ((k%a==0)&&(k%b==0)&&(k%c==0)){
//             return k
//         }
//     }
// }
//
// var min = minCal(sortNumbers[0],sortNumbers[1],sortNumbers[2])
// var max = minCal(sortNumbers[2],sortNumbers[3],sortNumbers[4])

// for (let j=sortNumbers[0];j<=max;j++){
//     let count = 0;
//     for (let i=0;i<sortNumbers.length;i++){
//         if (j%sortNumbers[i] === 0){
//             count++
//         }
//     }
//     if(count > 2){
//         console.log(true)
//         result = j;
//         break;
//     }
//     count = 0
// }


//
// let aI = parseInt(a);
// let bI = parseInt(b);
// print(a,b,aI > bI)
// if (aI > bI){
//     return 1;
// } else {
//     return -1;
// }
// console.log(result)

function matchesPattern(str) {
    return (/^\d{3}\-\d{3}\-\d{4}$/).test(str)
}

var result = matchesPattern("111-111-444")
console.log(result)
