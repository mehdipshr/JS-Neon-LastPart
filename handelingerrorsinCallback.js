

function ball1(ball2){ /*yek function be vorodi ball1 midim ke vaghti karesh tamom shod on vorodi ya function ro ejra kone 
dar marhale 2vom on function ro ham dar */
    setTimeout(() => {
        try {
            if (true) {
                console.log('ball 1 reached the end of the hill');
                ball2(ball3);
                
            }else{
                throw new Error("ball one failed") 
            }
        } catch (error) {
            console.log(error);
        }
    },2000)
}


function ball2(ball3){
    setTimeout(() => {
        try {
            if (false) {
                console.log('ball 2 reached the end of the hill');
                ball3();
            }else{
                throw new Error("the  ball two failed") 
            }
        } catch (error) {
            console.log(error);
        }
    },1000)
}

function ball3(){
    setTimeout(() => {
        console.log('ball 3 reached the end of the hill')
    },2000)
}

ball1(ball2);










