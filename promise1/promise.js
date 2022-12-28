const posts = [
    { title: 'post one', body: 'this is my post one' },
    { title: 'post two', body: 'this is my second post' }
];
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li> ${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve()
            }
            else {
                reject('Error: Something went wrong');
            }

        }, 2000)
    });

}
createPost({ title: 'post three', body: 'this is post three' })
    .then(getPosts)
    .catch(err => console.log(err))

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const lastelement = posts.pop()
                resolve(lastelement);
            }
            else {
                reject('Array is empty now')
            }
        }, 8000)
    });
}

deletePost()
    .then((deletedElement) => {
        console.log(deletedElement)
        getPosts();
        deletePost().then(() => {
            getPosts();
            deletePost().then(() => {
                getPosts();
                deletePost().then(() => { })
                    .catch((err) => {
                        console.log('Inside catch block', err)
                    })
            }).catch((err) => { })
        }).catch((err) => { })
    }).catch((err) => { })

//promise.all

const promise1 = Promise.resolve('hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'good bye'));
Promise.all([promise1, promise2, promise3]).then(values => console.log(values))


function lastUpdateTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastactivityTime = new Date().getTime();
            resolve(user.lastactivityTime);
        }, 3000)
    })
}

userUpdatePost(){
    Promise.all([createPost, lastUpdateTime]).then()
}

/*let pp1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("first promise has been solved");
        resolve(10);
    }, 2000);

});
let pp2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("second promise has been solved");
        resolve(20);
    }, 2000);

});
let pp3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("third promise has been solved");
        resolve(30);
    }, 3000);

});
let total = 0;
Promise.all([pp1, pp2, pp3]).then((result) => {
    for (var i in result) { total += result[i] }
    console.log(` RESULTS : ${result}`)
    console.log(` total : ${total}`)
}).catch((error) => {
    console.log(`error : ${error}`);
});*/


let promiseCall = function (returnData, message) {
    return function (resolve, reject) {
        setTimeout(() => {
            console.log(`the ${message}  has been resolved`);
            resolve(returnData);
        }, returnData * 100);

    }

};

let pp4 = new Promise(promiseCall(10, 'first'));
let pp5 = new Promise(promiseCall(20, 'second'));
let pp6 = new Promise(promiseCall(30, 'third'));
let total = 0;
Promise.all([pp4, pp5, pp6]).then((result) => {
    for (var i in result) { total += result[i] }
    console.log(` RESULTS : ${result}`)
    console.log(` total : ${total}`)
}).catch((error) => {
    console.log(`error:${error}`);
});