// Suggested code may be subject to a license. Learn more: ~LicenseLog:2616121036.
const inputKataSandi = 'rahasia123';

if (inputKataSandi === 'rahasia123') {
  console.log('Selamat Anda berhasil login.');
} else {
  console.log('Maaf kata sandi Anda salah.');
}

// Percabangan if else if
const nilai = 80;

if (nilai >= 80) {
  console.log('Selamat Anda lulus dengan nilai A.');
} else if (nilai >= 70) {
  console.log('Selamat Anda lulus dengan nilai B.');
} else if (nilai >= 60) {
  console.log('Selamat Anda lulus dengan nilai C.');
} else {
  console.log('Maaf Anda tidak lulus.');
}

// Percabangan switch
const hari = 'Senin';

switch (hari) {
  case 'Senin':
    console.log('Hari ini adalah hari Senin.');
    break;
  case 'Selasa':
    console.log('Hari ini adalah hari Selasa.');
    break;
  case 'Rabu':
    console.log('Hari ini adalah hari Rabu.');
    break;
  case 'Kamis':
    console.log('Hari ini adalah hari Kamis.');
    break;
  case 'Jumat':
    console.log('Hari ini adalah hari Jumat.');
    break;
  case 'Sabtu':
    console.log('Hari ini adalah hari Sabtu.');
    break;
  case 'Minggu':
    console.log('Hari ini adalah hari Minggu.');
    break;
  default:
    console.log('Hari tidak valid.');
}
