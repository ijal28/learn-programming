// Perulangan For adalah sebuah struktur kontrol yang digunakan untuk mengulang suatu blok kode beberapa kali.
// Contoh:
for (let i = 0; i < 10; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}


// Perulangan for of digunakan untuk mengulang suatu array atau objek yang dapat diulang (iterable).
// Contoh:
for (const element of [1, 2, 3, 4, 5]) {
  console.log(element); // Output: 1, 2, 3, 4, 5
}



// Perulangan for in digunakan untuk mengulang suatu array atau objek yang dapat diulang (iterable).
// Contoh:
const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
for (const property in obj) {
  console.log(`${property}: ${obj[property]}`); // Output: a: 1, b: 2, c: 3, d: 4, e: 5
}



// Perulangan While adalah sebuah struktur kontrol yang digunakan untuk mengulang suatu blok kode selama kondisi tertentu terpenuhi.
// Contoh:
let i = 0;
while (i < 10) {
  console.log(i); // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  i++;
}



// Perulangan Do While adalah sebuah struktur kontrol yang digunakan untuk mengulang suatu blok kode setidaknya sekali, kemudian mengulanginya lagi selama kondisi tertentu terpenuhi.
let j = 0;
do {
  console.log(j); // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  j++;
} while (j < 10);


