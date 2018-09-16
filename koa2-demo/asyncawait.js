// 异步-----------

// 1 ajax的回调函数，缺：多层嵌套，回调地狱！---------

// function ajax(successCall) {
//     setTimeout(() => {
//         var status = 200;
//         if (status == 200) {
//             let data = "result"
//             successCall(data)
//         }
//     }, 2000)
// }

// ajax((data) => {
//     console.log(data)

//     ajax((data) => {
//         console.log(data)

//         ajax((data) => {
//             console.log(data)

//         })
//     })
// })


// 2 Promise -------------------------------------

function Prom(str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve(str)
            } else {
                reject(str)
            }
        }, 1500)
    })
}


Prom("马云")
    .then(s => {
        console.log(s)
        return Prom("马化腾")
    })
    .then(s => {
        console.log(s)
        return Prom("王健林")
    })
    .then(s => {
        console.log(s)
    })


// 3 async - await 一起使用-------------------------
async function handle() {
    let str1 = await Prom("周星驰")
    console.log(str1)
    let str2 = await Prom("刘德华")
    console.log(str2)
    let str3 = await Prom("张学友")
    console.log(str3)
}

handle()