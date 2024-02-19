let ad = prompt('Istifadeci adinizi qeyd edin.');
let parol = prompt('Istifadeci parolunuzu qeyd edin.');
let netice;
switch (true) {
    case ad == 'Leila' && parol == 'Leyla2006':
        netice = 'Istifadeci adiniz ve parolunuz duzgundur.Xos gelmisiniz!.';

        break;

    default:
        netice = 'Istifadeci adiniz ve parolunuz sehvdir.Sayta giris ede bilmersiniz.';
        break;
}
document.getElementById('cavab').innerHTML = netice;