const posts = [
    { title: 'post one', body: 'this is my post one', lastUpdateTime: ' 12th jan 2009' },
    { title: 'post two', body: 'this is my second post', lastUpdateTime: ' 15th jan 2012' }
];


const PostsOperations = async () => {
    let getPosts = new Promise((resolve, reject) => {
        setTimeout(() => {
            let output = '';
            posts.forEach((post, index) => {
                output += `<li> ${post.title} ${post.body} ${post.lastUpdateTime}</li>`;
            });
            document.body.innerHTML = output;
            resolve("printed all posts");
        }, 8000)
    });
    post3 = { title: 'post three', body: 'this is my third post' }
    let createPosts = await new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post3);
            const error = false;
            if (!error) {
                resolve("pushed")
            }
            else {
                reject('Error: Something went wrong');
            }

        }, 2000)
    });

    let lastUpdateTime = new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                post3.lastUpdateTime = new Date();
                resolve('update  time :');
            }, 3000)
        })

    let deletePost = new Promise((resolve, reject) => {
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



    let [newPost, updateTime, showPosts, del] = await Promise.all(createPosts, lastUpdateTime, getPosts, deletePost)

    // console.log(` ${newPost}, ${updateTime}, ${showPosts}`);
    return [createPosts, lastUpdateTime, getPosts];

}
PostsOperations().then((m) => console.log(m));