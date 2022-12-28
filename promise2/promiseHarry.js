/*let promise1 = new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        console.log("promise is fulfilled");
        resolve(true);

    }, 5000)
})

let promise2 = new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        console.log("promise is not fulfilled");
        reject(new Error(" ooppssss rejected"));

    }, 5000)
})
promise1.then((value) => {
    console.log(value);
})
//console.log(promise1, promise2);

promise2.catch((Error) => {
    console.log(Error)
    console.log('sorry cant be fulfilled');
})*/

// promise chaining
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolved after 2 seconds")
        resolve(56)
    }, 2000)
})

p1.then((value) => {
    console.log(value)
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => { resolve("Promise 2") }, 2000)
    })
    return p3;
}).then((value) => {
    console.log("We are done", value)
    return 2
}).then((value) => {
    console.log(value)
    console.log("Now we are pakka done")
})
