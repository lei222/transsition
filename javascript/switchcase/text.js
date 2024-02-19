// let reqem = Math.floor( Math.random() * 5);
// switch (reqem) {
//     case 0:
//         console.log('mitri');
//         break;
//     case 1:
//         console.log('leyla');  
//         break;
//     case 3:
//         console.log('nurlan');  
//         break;
//     case 4:
//         console.log('ramo');    
//         break;

//     default:
//         console.log('davud');
//         break;
// }
let kurs = prompt('Hansi kurs ile maraqlanirsiniz?');
let netice;
switch (kurs) {
    case 'html':
        netice = 'Html kursuna xos baslaya bilersiniz';
        break;
    case 'css':
        netice = 'Css kursuna xos baslaya bilersiniz';
        break;
    case 'javascript':
        netice = 'jS kursuna xos baslaya bilersiniz';
        break;

    default:
        netice = 'cox teessuf bizde ele kurs yoxdur';
        break;
}
document.getElementById('Switch').innerHTML = netice;

