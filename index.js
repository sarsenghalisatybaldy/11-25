// let san1 = +prompt("birinshy san")
// let san2 = +prompt("ekinshy sh")

// if(san1 > 0 && san2 > 0){
//     sum1 = san1 + san2;
//     sum2 = san1 - san2;
//     sum3 = san1 * san2;
//     sum4 = san1 / san2;
//     alert(`қосу: ${sum1} \n алу: ${sum2} \n  көбейту: ${sum3}\n бөлу: ${sum4}`)
// }
// else{
//     alert("Қате енгізу!")
// }





// let sum =0
// let zat_turi;
// let maxtagam_baga=0;

// function shygyntap(){
//     let i=1
//     while(true){
//         let shygynaty = prompt(i+"zatuzi")
//         if(shygynaty.toLowerCase() == "aiakhtau"){
//             console.log(`shygyn nomeri #${i}: aiakhtau`);
//             break;
//         }else{
//             let shygynbaga = +prompt(i+"-shygyn bagasyn jazynyz");
//             console.log(`shugyn #${i}: ${shygynaty} ${shygynbaga} tenge`);
//             sum = sum + shygynbaga
//             if (maxtagam_baga){
//                 maxtagam_baga = shygynbaga
//                 zat_turi = shygynaty
//             }
//         }
//         if(sum>5000 && sum<10000){
//             sum = sum - (sum * 0.1);
//             alert(`сізге 10% жеңілдік жасалады: ${sum}`)
//         }
//         else if(sum>10000 && sum<20000){
//             sum = sum - (sum * 0.2);
//             alert(`сізге 20% жеңілдік жасалады:${sum}`)
//         }else if(sum>20000){
//             sum = sum - (sum * 0.3);
//             alert(`сізге 30% жеңілдік жасалады:${sum}`)
//         }    
//         i++;
//     }
// }
// shygyntap();
git 




let san = +prompt("bir san egyzynyz:")
let sum = 50;

if(sum == sum + 1 || sum == sum + 2 || sum == sum + 3 || sum == sum + 4 || sum == sum + 5){
    alert("Сәл жоғары")
}else if(sum == sum - 1 || sum == sum - 2 || sum == sum - 3 || sum == sum - 4 || sum == sum - 5){
    alert("Сәл төмен")
}

