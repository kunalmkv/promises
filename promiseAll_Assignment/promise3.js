const posts = [
    { title: 'post one', body: 'this is my post one', lastUpdateTime: ' 12th jan 2009' },
    { title: 'post two', body: 'this is my second post', lastUpdateTime: ' 15th jan 2012' }
];
let promise1 = function getPosts() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let output = '';
            posts.forEach((post, index) => {
                output += `<li> ${post.title} ${post.body} ${post.lastUpdateTime}</li>`;
            });
            document.body.innerHTML = output;
            resolve(output);
        }, 8000)
    })
}
let promise2 = function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve("pushed")
            }
            else {
                reject('Error: Something went wrong');
            }

        }, 2000)
    });

}

let promise3 = function lastUpdateTime(post) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                post.lastUpdateTime = new Date();
                resolve(post.lastUpdateTime);
            }, 3000)
        })
}

postm = { title: 'post three', body: 'this is my third' }
Promise.all([promise1, promise2(postm), promise3(postm)]).then((values) => {
    console.log(posts)
    console.log(values)
});

promise1();

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

deletePost().then((deletedElement) => {
    console.log(deletedElement)
    console.log(promise1());
})