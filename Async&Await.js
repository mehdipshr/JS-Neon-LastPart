async function ball1(){
        if(true){
            return("the ball one reached the end of the hill");
        }else{
            throw new Error("the ball one failed")
        }
}

function ball2(){
    if(true){
        return("the ball two reached the end of the hill");
    }else{
        throw new Error("the ball two failed")
    }
}
function ball3(){
    if(true){
        return("the ball three reached the end of the hill");
    }else{
        throw new Error("the ball three failed")
    }
}

//console.log(ball1());  
/*Async dar asl yek promis hast consol dide shavad be hamrahe in khat,
 pas mitonim az piyade sazi .then .catch ke baraye promis hast estefade konim */


// ball1().then((msg) => {
//     console.log(msg);
//     return ball2(); 
// }).then((msg) => {
//     console.log(msg);
//     return ball3();
// }).then((msg) => {
//     console.log(msg);
// }).catch(Error => { 
//     console.log(Error);
// }) 
/* ham in ravesh va ham ravesh baadi ghabele ejra hast */

async function execute(){
    try {
        console.log(await ball1());
        console.log(await ball2());
        console.log(await ball3());
    } catch (error) {
        console.log(error);
    }
}
execute();

