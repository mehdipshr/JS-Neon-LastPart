
function ball1(callback){ /*yek function be vorodi ball1 midim ke vaghti karesh tamom shod on vorodi ya function ro ejra kone 
dar marhale 2vom on function ro ham dar */
    setTimeout(() => {
                console.log('ball 1 reached the end of the hill');
                callback(true);
    },2000)
}


function ball2(callback){
    setTimeout(() => {
                console.log('ball 2 reached the end of the hill');
                callback(true);

    },1000)
}

function ball3(){
    setTimeout(() => {
        console.log('ball 3 reached the end of the hill')
    },2000)
}

ball1((response) => {
    try {
        if(response){
            console.log('ball 1 reached the end of the hill');
            ball2((response) => {
                try {
                    if (response) {
                        console.log("ball 2 reached the end of the hill");
                        ball3();
                    }else{
                        throw new Error("ball 2 failed") 
                    }
                } catch (error) {
                    console.log(error);
                }
            })
        }else{
            throw new Error("ball 1 failed")
        }
    } catch (error) {
        console.log(error);
    }
})

