// (function() {
//     console.log('first')
//
//     setTimeout(() => {
//         console.log(0);
//     });
//
//     new Promise(resolve => {
//         console.log(1);
//
//         setTimeout(() => {
//             resolve();
//             Promise.resolve().then(() => console.log(2));
//             console.log(3);
//         });
//
//         Promise.resolve().then(() => console.log(4));
//
//     }).then(() => {
//         console.log(5);
//         Promise.resolve().then(() => console.log(8)); //这句是多加的
//         setTimeout(() => console.log(6));
//     });
//
//     console.log(7);
//
// })();
// console.log(555)
// let a = new Promise(
//     function(resolve, reject) {
//         console.log(1)
//         setTimeout(() => console.log(2), 0)
//         console.log(3)
//         console.log(4)
//         resolve(true)
//     }
// )
// a.then(v => {
//     console.log(8)
// })
// console.log(11243)
// let b = new Promise(
//     function() {
//         console.log(5)
//         setTimeout(() => console.log(6), 0)
//     }
// )
//
// console.log(7)
//
// (function() {
//     setTimeout(() => {
//         console.log(0);
//     });
//
//     new Promise(resolve => {
//
//         console.log(1);
//
//         setTimeout(() => {
//             resolve(17);
//             Promise.resolve().then(() => {
//                 console.log(2);
//                 setTimeout(() => console.log(3));
//                 Promise.resolve().then(() => console.log(4));
//             });
//         });
//
//         Promise.resolve().then(() => console.log(5));
//
//     }).then(() => {
//
//         console.log(6);
//         Promise.resolve().then(() => console.log(7));
//         setTimeout(() => console.log(8));
//
//     });
//
//     console.log(9);
// })();



// async function async1() {
//     console.log("async1 start");
//     await  async2();
//     console.log("async1 end");
//
// }
// async  function async2() {
//     console.log( 'async2');
// }
// console.log("script start");
// setTimeout(function () {
//     console.log("settimeout");
// },0);
// async1();
// new Promise(function (resolve) {
//     console.log("promise1");
//     resolve();
// }).then(function () {
//     console.log("promise2");
// });
// console.log('script end');



function testSometing() {
    console.log("执行testSometing");
    return "testSometing";
}

async function testAsync() {
    console.log("执行testAsync");
    return Promise.resolve("hello async");
}

async function test() {
    console.log("test start...");
    const v1 = await testSometing();//关键点1
    console.log(v1);
    const v2 = await testAsync();
    console.log(v2);
    console.log(v1, v2);
}

test();

var promise = new Promise((resolve)=> { console.log("promise start.."); resolve("promise");});//关键点2
promise.then((val)=> console.log(val));

console.log("test end...")
