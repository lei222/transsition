let azn = prompt('Cevirmek istediyiniz meblegi qeyd edin');
let usd = azn * 1.7 ;
let tr = azn / 0.056;
let euro = azn * 0.54 ;
document.getElementById('cevirme').innerHTML = azn + ' Azn = ' + usd + ' $.';
document.getElementById('cevirme2').innerHTML = azn + ' Azn = ' + tr + 'TL.';
document.getElementById('cevirme3').innerHTML = azn + ' Azn = ' + euro + ' Euro.';

