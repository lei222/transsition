// function dollar(usd) {
//     console.log(`${usd} dollar ${usd * 1.7} azn eder.`);

// }
// dollar(70);

let dollar = 1.7;
let netice;
function exchange(manat,dollar,valyuta ) {
    netice = manat * dollar;
    console.log(`${manat} ${valyuta} = ${netice} manat eder`);
    
}
exchange(40,dollar,'$' )
