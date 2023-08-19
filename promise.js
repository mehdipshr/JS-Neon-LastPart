function ball1(){
    return new Promise((resolve,reject) => {
        if(true){
            resolve("the ball one reached the end of the hill");
        }else{
            reject("the ball one failed")
        }
    })
}

function ball2(){
    return new Promise((resolve,reject) => {
        if(false){
            resolve("the ball two reached the end of the hill")
        }else{
            reject("the ball two failed")
        }
    })
}
function ball3(){
    return new Promise((resolve,reject) => {
        if(true){
            resolve("the ball three reached the end of the hill")
        }else{
            reject("the ball three failed")
        }
    })
}

/* promise 2 ta method dare then va catch. methode .then() yek function ro be onvane vorodi migire!
.then(() => {})  va function yek peygham ya vorodi ba khodesh dare ke be natije ke az resolve bargasht dade mishe */

ball1().then((msg) => {
    console.log(msg);
    return ball2(); /* baad az inke motmaen shodim ball 1 be dorosti ejra shod ,ball 2 ro seda mizanim vali agar return ro ghablesh nazarim undefinde daryaft mikonim */
}).then((msg) => {
    console.log(msg);
    return ball3();
}).then((msg) => {
    console.log(msg);
}).catch(Error => { /* inja faghat yek catch niyaz darim baraye tamame function ha va niyaz nist baraye harkodom jodagone catch bezarim */
    console.log(Error);
})