// var hola = "Hola Platzi"
// var $ = function(hola){
//     console.log(`Say ${hola}`)
// }

// $(hola)

// function imprimirnumeros(){
//     var i;

//     for(i = 0; i < 10; i++){
//         function eventuallyPrintNumber(n){
//             setTimeout(() => {
//                 console.log(n);
//             }, 100);
//         }

//         eventuallyPrintNumber(i)
//     }
// }

// imprimirnumeros()

function imprimirnumeros(){

    for(let i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 100);
    }
}

imprimirnumeros()