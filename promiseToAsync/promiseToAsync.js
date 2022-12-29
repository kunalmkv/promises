/*console.log('person 1 : shows ticket');
console.log('person 2 : shows ticket');

const promiseWifeBringingTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('3');
    }, 3000);
});

const getPopCorn = promiseWifeBringingTicket.then((t) => {
    console.log(" husband: we should now go in");
    console.log("wife: nooooo, I am are hungry");
    return new Promise((resolve, reject) => resolve(`person ${t} : shows tikcet later`));
});
const getButter = getPopCorn.then((t) => {
    console.log(" now happy?? 😒");
    console.log(" huuhhh no  i need butter now on my popcorn 😏🙄");
    return new Promise((resolve, reject) => resolve(`${t} heyaa`));
})
getButter.then((t) => console.log(t));
getPopCorn.then((t) => console.log(t))
console.log('person 4 : shows ticket');
console.log('person 5 : shows ticket');*/
/*let post = { title: 'post three', body: 'this is my third' }
const preMovie = async (b) => b;

preMovie(post).then((m) => console.log(m))*/

/*async function temp() {
    return '25 degree celsius';
}
temp().then((x) => {
    alert(x);
})*/
/*console.log('person 1 : shows ticket');
console.log('person 2 : shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicket = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });
    let ticket = await promiseWifeBringingTicket;
    return ticket;
}
preMovie().then((m) => console.log(m));*/

/*async function temp() {

    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(" 40 degree Celsius");
        }, 2000);
    })
    let BangloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 degree Celsius");
        }, 8000);
    })
    //delhiWeather.then(alert);
    //BangloreWeather.then(alert);
    console.log(" fetching delhi weather please wait...");
    let delhiWea = await delhiWeather
    console.log(" fetched delhi weather :" + delhiWea);
    console.log("fetch banglore weather please wait..");
    let bang = await BangloreWeather
    console.log(" fetched Banglore weather :" + bang);
    return [delhiWea, bang];
}
let a = temp();
a.then((value) => {
    console.log(value);
}) */

/*async function test() {
    console.log("A");
    await console.log("B");
    console.log("C");
}

test();
console.log("d")
console.log("e")*/


console.log('person 1 : shows ticket');
console.log('person 2 : shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicket = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('3');
        }, 3000);
    });
    const getPopCorn = new Promise((resolve, reject) => resolve('popcorn'));
    const addButter = new Promise((resolve, reject) => resolve('butter'))
    let a;
    try {
        a = await promiseWifeBringingTicket; ``
    }
    catch (e) {
        a = ' soo sad😥😥';
    }

    console.log(`husband: we should now go in as I have bought ${a}`);
    console.log("wife: nooooo, I am are hungry");

    let b = await getPopCorn;

    console.log(` husband: now happy?? i got some ${b} 😒`);
    console.log(" wife: huuhhh no  i need butter now on my popcorn 😫😫");
    let c = await addButter;
    console.log(` husband: now happy?? i got some ${c} 😒`);
    console.log(` husband : anything else?? 😒`);
    const d = new Promise((resolve, reject) => resolve('1st candy bought!!'));
    const e = new Promise((resolve, reject) => resolve('yayy drinking coke'));
    let [popCorn, candy, coke] = await Promise.all([c, d, e]);
    console.log(` ${popCorn}, ${candy}, ${coke}`);
    return [a, b, c];
};


const getButter = getPopCorn.then((t) => {

    return new Promise((resolve, reject) => resolve(t));
})
getButter.then((t) => console.log(t));
getPopCorn.then((t) => console.log(t))
console.log('person 4 : shows ticket');
console.log('person 5 : shows ticket');


preMovie().then((m) => console.log(m));