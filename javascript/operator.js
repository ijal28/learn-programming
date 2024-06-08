
let angka1 = 10;
let angka2 = 5;

// Operator aritmatika
console.log(angka1 + angka2); // Penjumlahan
console.log(angka1 - angka2); // Pengurangan
console.log(angka1 * angka2); // Perkalian
console.log(angka1 / angka2); // Pembagian
console.log(angka1 % angka2); // Modulus (sisa bagi)
console.log(angka1 ** angka2); // Eksponen (pangkat)

// Operator penugasan
let x = 10;
x += 5; // Sama dengan x = x + 5
console.log(x); // Output: 15

// Operator perbandingan
console.log(angka1 > angka2); // Lebih besar dari
console.log(angka1 < angka2); // Lebih kecil dari
console.log(angka1 == angka2); // Sama dengan
console.log(angka1 != angka2); // Tidak sama dengan
console.log(angka1 >= angka2); // Lebih besar dari atau sama dengan
console.log(angka1 <= angka2); // Lebih kecil dari atau sama dengan
console.log(angka1 === angka2); // Sama dengan dan sama tipe
console.log(angka1 !== angka2); // tidak sama dengan dan tidak sama tipe

// Operator logika
console.log(true && false); // AND
console.log(true || false); // OR
console.log(!true); // NOT

// Operator ternary
let result = angka1 > angka2 ? "Angka 1 lebih besar" : "Angka 2 lebih besar";
console.log(result); // Output: "Angka 1 lebih besar"

// Operator nullish coalesching
let y = null;
let z = y ?? 10;
console.log(z); // Output: 10