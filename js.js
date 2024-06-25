
let sayi = Number(Math.round(Math.random() * 10));
const input = document.getElementById('buton-1');

console.log(sayi);

var tahminSayisi = 0;
var maxTahmin = 10;

input.addEventListener('click',function uygulama(){

    var deger = parseFloat(document.getElementById('deger').value);
    var sonuc = document.getElementById("deger");
    var body = document.getElementById("body");
    var adax = document.getElementById("adax");
    var tahminSayisiElement = document.getElementById('tahminSayisi');
    

    for (let i = tahminSayisi; i < maxTahmin; i++) {
        tahminSayisi ++;


    if (isNaN(deger)) {
        // console.log("Lütfen sayı giriniz");
        adax.innerText = 'Lütfen bir sayı giriniz';
        // sonuc.value= 'Lütfen sayı giriniz';

    }else if(deger < sayi){
        // console.log('Daha büyük bir sayı giriniz');
        // sonuc.innerText= 'Daha büyük bir sayı giriniz';
        adax.innerText = 'Daha büyük bir sayı giriniz';

    }else if(deger > sayi){
        // console.log('Daha küçük bir sayı giriniz');
        // sonuc.innerText= 'Daha küçük bir sayı giriniz';
        adax.innerText = 'Daha küçük bir sayı giriniz';

    }else{
        console.log('Tebrikler bildiniz');
        sonuc.value = 'Sayı : ' + sayi;
        adax.innerText = 'Bildiniz.'
        body.style.backgroundColor = "#7fff00";
        sayi = Number(Math.round(Math.random() * 10));
        tahminSayisiElement.innerText = tahminSayisi + "tahmin";
        
        console.log(sayi);
 

    setTimeout(function() {    //setTimeout ile de oluyor
        body.style.backgroundColor = 'white';
        sonuc.value = "";
        adax.innerText = "";
        tahminSayisiElement.innerText = "";

    },5000);

    // tahminSayisi++;
    // tahminSayisiElement.innerText = "Tahmininiz: " + tahminSayisi;

            // break;
        }
        break
    }         
});
