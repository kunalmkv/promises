console.log('person 1 : shows ticket');
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
    return new Promise((resolve, reject) => resolve(t));
})
getButter.then((t) => console.log(t));
getPopCorn.then((t) => console.log(t))
console.log('person 4 : shows ticket');
console.log('person 5 : shows ticket');

const preMovie = async () => 'pre movie';

preMovie().then((m) => console.log(m))