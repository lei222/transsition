let ad = prompt('Adinizi qeyd edin.');
let pul = prompt('Siz ayda ne qeder emek haqqi elde edirsiniz?');
let dollar = 1.7;
let netice;
function maas(pul, dollar) {
    netice = pul / dollar;

    document.getElementById('cavab').innerHTML = `${ad} ayda ${netice.toFixed()} dollar maas alir.`

} maas(pul, dollar)