// let mesafe = prompt('gedeceyiniz mesafeni qeyd edin');
// let suret = prompt('avtomobilin gedeceyi sureti qeyd edin');
// let zaman= mesafe / suret;

// document.getElementById('zaman').innerHTML = 'siz ' + mesafe + ' km mesafeni ' + suret + ' km/saat suretle getseniz ' + zaman + ' saata catarsiniz'

// mecud dukandan nece alma alib, ramo o almalarin necesini yeyib, mecidin sumkada nece almasi qalib 

let mecid = prompt( 'mecid dukandan nece alma alib?');
let ramo = prompt ( 'ramo o almalarsan necesini yedi? ')
let sumka = mecid - ramo;

document.getElementById('sumka').innerHTML = ' Mecid dukandan ' + mecid + ' alma aldi, ' + ' ramo o almalardan ' + ramo + 'ni yedi ' + ' mecidin sumkasinda ' + sumka + ' alma qaldi'
