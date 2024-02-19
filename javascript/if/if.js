// let t = 3;

// if (t > 10 ) {
//     console.log('hava istidir');

// }
// else{
//     console.log('hava istidi')

// let yas = 27;
// if (yas > 18 ) {
//     console.log('siz prava ala bilersiniz'); 
// }
// else{
//     console.log('siz prava ala bilmersiniz');
// }

// let ad = 'leyla';
// let yas = 7;
// if (yas > 60) {
//     console.log(ad + ' qocadir.');
// } else if (yas > 13) {
//     console.log(ad + ' gencdir.');
// } else {
//     console.log(ad + ' usagdir');
    
// }

let hava = prompt(' Hava neche derecedir?');
let temp = 0;

if (temp > 25 ) {
    netice = 'Hava istidir';
    
}
else if( temp > 10 ){
    netice = ' Hava serindir';
}
else if( temp > 0 ){
    netice = 'Hava soyuqdur ';
}else {
    netice = 'Hava shaxtalidir';

}

document.getElementById('cavab').innerHTML = netice;
