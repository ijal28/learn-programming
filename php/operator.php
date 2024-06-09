<?php
$a = 10;
$b = 3;

// Operator matematika
echo $a + $b; // 3
echo $a - $b; // 1
echo $a * $b; // 6
echo $a / $b; // 2
echo $a % $b; // 0
echo $a ** $b;

// Operator penugasan
$a = 1; // Menetapkan nilai 1 ke variabel $a
$a += 2; // Menambahkan 2 ke variabel $a, sehingga menjadi 3
$a -= 2; // Mengurangi 2 dari variabel $a, sehingga menjadi 1
$a *= 2; // Mengalikan variabel $a dengan 2, sehingga menjadi 2
$a /= 2; // Membagi variabel $a dengan 2, sehingga menjadi 1
$a %= 2; // Menghitung sisa pembagian variabel $a dengan 2, sehingga menjadi 1

// Operator perbandingan
echo $a == $b; // false
echo $a != $b; // true
echo $a > $b; // true
echo $a < $b; // false
echo $a >= $b; // true
echo $a <= $b; // false

// Operator logika
echo $a && $b; // false
echo $a || $b; // true
echo !$a; // true

// Operator string
echo $a . $b; // "12"
echo strlen($a); // 2
echo strpos($a, "1"); // 0
echo substr($a, 0, 1); // "1"