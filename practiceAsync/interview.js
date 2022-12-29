async function playStation() {
    console.log('studying');
    console.log('get results');

    const res = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('we are buying PS5')
        }, 1000)
    });
    console.log(res);
    const res2 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Setting up PS5');
        }, 5000)
    })
    console.log(res2);
    console.log('STARTED Playing');
}
playStation();