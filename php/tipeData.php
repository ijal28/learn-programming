<?
// Tipe Data Boolean
$benar = true;
$salah = false;

// Tipe Data Integer
$umur = 20;

// Tipe Data Float
$nilai = 3.14;

// Tipe Data String
$nama = "John Doe";

// Tipe Data Array
$hobi = array("Membaca", "Menulis", "Olahraga");

// Tipe Data Object
class Orang {
  public $nama;
  public $umur;

  function __construct($nama, $umur) {
    $this->nama = $nama;
    $this->umur = $umur;
  }
}

$orang = new Orang("John Doe", 20);

// Tipe Data Resource
$file = fopen("data.txt", "r");

// Tipe Data NULL
$kosong = null;
?>
