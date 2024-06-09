
let angka1 = 10;
let angka2 = 5;


// Operator aritmatika adalah operator yang digunakan untuk melakukan operasi matematika pada dua atau lebih bilangan.
// Operator aritmatika yang umum digunakan adalah:
// - Penjumlahan (+)
// - Pengurangan (-)
// - Perkalian (*)
// - Pembagian (/)
// - Modulus (%)
// - Eksponen (**)
console.log(angka1 + angka2); // Penjumlahan
console.log(angka1 - angka2); // Pengurangan
console.log(angka1 * angka2); // Perkalian
console.log(angka1 / angka2); // Pembagian
console.log(angka1 % angka2); // Modulus (sisa bagi)
console.log(angka1 ** angka2); // Eksponen (pangkat)



// Operator penugasan adalah operator yang digunakan untuk menetapkan nilai ke variabel.
// Operator penugasan yang umum digunakan adalah:
// - = (sama dengan)
// - += (tambah dan sama dengan)
// - -= (kurang dan sama dengan)
// - *= (kali dan sama dengan)
// - /= (bagi dan sama dengan)
// - %= (modulus dan sama dengan)
// - **= (eksponen dan sama dengan)
let x = 10;
x += 5; // Sama dengan x = x + 5
console.log(x); // Output: 15



// Operator perbandingan adalah operator yang digunakan untuk membandingkan dua nilai.
// Operator perbandingan yang umum digunakan adalah:
// - Lebih besar dari (>)
// - Lebih kecil dari (<)
// - Sama dengan (==)
// - Tidak sama dengan (!=)
// - Lebih besar dari atau sama dengan (>=)
// - Lebih kecil dari atau sama dengan (<=)
// - Sama dengan dan sama tipe (===)
// - Tidak sama dengan dan tidak sama tipe (!==)
console.log(angka1 > angka2); // Lebih besar dari
console.log(angka1 < angka2); // Lebih kecil dari
console.log(angka1 == angka2); // Sama dengan
console.log(angka1 != angka2); // Tidak sama dengan
console.log(angka1 >= angka2); // Lebih besar dari atau sama dengan
console.log(angka1 <= angka2); // Lebih kecil dari atau sama dengan
console.log(angka1 === angka2); // Sama dengan dan sama tipe
console.log(angka1 !== angka2); // tidak sama dengan dan tidak sama tipe



// Operator logika adalah operator yang digunakan untuk menggabungkan dua atau lebih ekspresi boolean.
// Operator logika yang umum digunakan adalah:
// - AND (&&)
// - OR (||)
// - NOT (!)
console.log(true && false); // AND
console.log(true || false); // OR
console.log(!true); // NOT


// Operator ternary adalah operator yang digunakan untuk mengembalikan nilai yang berbeda berdasarkan kondisi yang diberikan.
// Operator ternary memiliki tiga operan: kondisi, nilai yang akan dikembalikan jika kondisi bernilai true, dan nilai yang akan dikembalikan jika kondisi bernilai false.
// Operator ternary ditulis dalam bentuk:
// kondisi ? nilai_true : nilai_false
let result = angka1 > angka2 ? "Angka 1 lebih besar" : "Angka 2 lebih besar";
console.log(result); // Output: "Angka 1 lebih besar"

// Operator nullish coalesching adalah operator yang digunakan untuk mengembalikan nilai pertama yang tidak null atau undefined.
// Operator nullish coalesching ditulis dalam bentuk:
// nilai_pertama ?? nilai_kedua
let y = null;
let z = y ?? 10;
console.log(z); // Output: 10