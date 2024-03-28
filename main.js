// var aylar = [
//     "Yanvar",
//     "Fevral",
//     "Mart",
//     "Aprel",
//     "May",
//     "Iyun",
//     "Iyul",
//     "Avqust",
//     "Sentyabr",
//     "Oktyabr",
//     "Noyabr",
//     "Dekabr"
//   ];
//   var aynomresi = prompt("bir ay nomresi daxil edin");
//   if (aynomresi >= 1 && aynomresi <= 12) {
//     var indeks = aynomresi - 1;
//     var secilenay = aylar[indeks];
//     alert("secilen ay " + secilenay);
//   } else {
//     alert("invalid input");
//   }
  


// var herf = prompt("Bir herf daxil edin");
// var reqem = parseInt(prompt("Bir reqem daxil edin"));
// function yazdirHerf(herf, reqem) {
//     var netice = "";
//     for (var i = 0; i < reqem; i++) {
//         netice += herf;
//     }
//     return netice;
// }
// var netice = yazdirHerf(herf, reqem);
// alert(netice);



// let reqem = parseInt(prompt("Zəhmət olmasa bir ədəd daxil edin:"));
// let cem = 0;
// while (reqem > 0) {
//     cem += reqem % 10; 
//     reqem = Math.floor(reqem / 10);
// }
// console.log("Ədədin mərtəbələrinin cəmi:", cem);



// let num = parseInt(prompt("Zəhmət olmasa bir ədəd daxil edin:"));
// let cem = 0;
// for (let i = 1; i <= num / 2; i++) {
//     if (num % i === 0) {
//         cem += i;
//     }
// }
// if (cem === num && num !== 0) {
//     console.log(num + " mükəmməl ədəddir.");
// } else {
//     console.log(num + " mükəmməl ədəd deyil.");
// }



let list = [2, 4, 7, 9, 3, 12, 46, 32, 19];
let enBalaca = list[0];
let enBöyük = list[0];
let toplam = 0;
for (let i = 0; i < list.length; i++) {
    let current = list[i];
    toplam += current; 
    if (current < enBalaca) {
        enBalaca = current;
    }
    if (current > enBöyük) {
        enBöyük = current;
    }
}
let orta = (enBalaca + enBöyük) / 2;
console.log("En büyük ve en balaca elementlerin ortalması:", orta);

