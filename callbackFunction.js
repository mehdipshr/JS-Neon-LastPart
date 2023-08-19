
// function print(){ /*dar in ravesh dastorate ma be tartib anjam nemishan chon settimout yek function hast vorodi 
//     1val yek function va vorodi 2vomesh bar hasb mili saniye */ 
//     setTimeout(() => {
//         console.log('b');
//     },1000)
    
// }

// console.log('a');
// print();
// console.log('c');


//callback functions example


function ball1(ball2){ /*yek function be vorodi ball1 midim ke vaghti karesh tamom shod on vorodi ya function ro ejra kone 
dar marhale 2vom on function ro ham dar */
    setTimeout(() => {
        console.log('ball 1 reached the end of the hill');
        ball2(ball3);
    },2000)
}


function ball2(ball3){
    setTimeout(() => {
        console.log('ball 2 reached the end of the hill');
        ball3();
    },1000)
}

function ball3(){
    setTimeout(() => {
        console.log('ball 3 reached the end of the hill')
    },2000)
}

ball1(ball2);

