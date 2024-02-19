let user1 = 'leyla';
let user2 = 'davud';
let user3 = 'mitri';
let user4 = 'nurlan';
let user5 = 'ramo';
let user;
let qurban;
let dc;


function oyna() {
    let num = Math.floor(Math.random() * 5);
    let num2 = Math.floor(Math.random() * 5);
    let num3 = Math.floor(Math.random() * 2);


    if (num == 0) {
        user = user1;
    } else if (num == 1) {
        user = user2;
    } else if (num == 2) {
        user = user3;
    } else if (num == 3) {
        user = user4;
    } else {
        user = user5;
    }

    if (num2 == 0) {
        qurban = user1;

    } else if (num2 == 1) {
        qurban = user2;
    } else if (num2 == 2) {
        qurban = user3;

    } else if (num2 == 3) {
        qurban = user4;
    } else {
        qurban = user5;
    }

    if (num3 == 0) {
        dc = 'dogruluq';
    } else {
        dc = 'cesaret';
    }



    document.getElementById('dc').innerHTML = `${user} qalib geldi. ${qurban} qurban olaraq ${dc} oyunu oynuyacaq`


}