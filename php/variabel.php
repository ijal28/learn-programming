<?php
// Deklarasi variabel dengan nilai awal
$nama = "John Doe";
$umur = 30;
$status = true;

// Deklarasi variabel tanpa nilai awal
$alamat;
$pekerjaan;
$hobi;

// Mengubah nilai variabel
$nama = "Jane Doe";
$umur = 31;

// Menghapus variabel
unset($status);

// Menampilkan nilai variabel
echo "Nama: ".$nama."\n";
echo "Umur: ".$umur."\n";
echo "Status: ".$status."\n";


// Konstanta adalah variabel yang nilainya tidak dapat diubah setelah dideklarasikan.
define("NAMA", "John Doe");
define("UMUR", 30);
define("STATUS", true);

// Menampilkan nilai konstanta
echo "Nama: ".NAMA."\n";
echo "Umur: ".UMUR."\n";
echo "Status: ".STATUS."\n";

// konstanta dengan echo
const alamat = "Desa Dukuh";
const pekerjaan = "Programmer";
const hobi = "Membaca";

// Menampilkan nilai konstanta
echo "Alamat: ".alamat."\n";
echo "Pekerjaan: ".pekerjaan."\n";
echo "Hobi: ".hobi."\n";

