var angka = [1, 4, -5, -9, -4, 8, -25]
var arrayPositif = [];
var arrayNegatif = [];
var x = 0;
var y = 0;
var totalPositif = 0;
var totalNegatif = 0;

for (var i = 0; i < angka.length; i++) {
    if (angka[i] > 0) {
        arrayPositif[x] = angka[i]
        x++;
    }
}
// console.log(arrayPositif);

for (var i = 0; i < arrayPositif.length; i++) {
    totalPositif = totalPositif + arrayPositif[i]
}
// console.log(totalPositif);

for (var i = 0; i < angka.length; i++) {
    if (angka[i] < 0) {
        arrayNegatif[y] = angka[i]
        y++;
    }
}

// console.log(arrayNegatif);

for (var i = 0; i < arrayNegatif.length; i++) {
    totalNegatif = totalNegatif - arrayNegatif[i]
}

// console.log(totalNegatif);

if (totalPositif > totalNegatif) {
    console.log('Positif Win.');
} else if (totalPositif < totalNegatif) {
    console.log('Negatif Win.');
} else {
    console.log('Draw');
}