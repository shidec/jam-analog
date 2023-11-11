const centerX = 197; //posisi tengah jam
const centerY = 195; //posisi tengah jam

const lengthHour = 86; //panjang jarum jam
const widthHour = 10; //tebal jarum jam

const lengthMinute = 120; //panjang jarum menit
const widthMinute = 6; //tebal jarum menit

const lengthSecond = 133; //panjang jarum detik
const widthSecond = 1; //tebal jarum detik

const canvas = document.getElementById("myCanvas"); //dapatkan element canvas
const ctx = canvas.getContext("2d"); //dapatkan contextnya untuk melakukan penggambaran

//jalankan script di bawah ini setiap 1000 ms (1 detik)
setInterval(function () {
  const date = new Date(); //buat object Date sesuai dengan waktu saat ini

  //hapus gambar sebelumnya
  //coba hapus/komen baris ini untuk melihat hasilnya jika gambar sebelumnya tidak dihapus
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //nilai jam dihitung berdasarkan jam, menit dan detik saat ini
  //misal jika jam = 4, menit = 30 , detik = 15
  //jam = 4 + 30 / 60 + 15 / 3600 = 4 + 0.5 + 0.00416 = 4.50416
  //jadi posisi jarum jam ada di antara angka 4 dan 5
  const hour =
    date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600;

  //nilai menit dihitung berdasarkan menit dan detik saat ini
  //misal jika menit = 15 , detik = 30
  //minute = 15 + 30 / 60 = 15.5
  //jadi posisi jarum menit di tengah antara detik ke 15 dan 16
  const minute = date.getMinutes() + date.getSeconds() / 60;

  drawHour(hour); //gambar jarum jam
  drawMinute(minute); //gambar jarum menit
  drawSecond(date.getSeconds()); //gambar jarum detik

  //-- Gambar bulatan di tengah jam untuk menutupi pangkal jarum
  //mulai menggambar
  ctx.beginPath();
  //warna bulatan
  ctx.fillStyle = "#dddddd";
  //menggambar bulatan menggunakan fungsi arc(posisiX, posisiY, sudutAwal, sudutAkhir)
  //menggambar mulai sudut awal 0, dan akhir 2*PI berarti menggambar satu lingkaran penuh
  ctx.arc(centerX, centerY, 9, 0, 2 * Math.PI);
  //gambarkan isi/arsirannya
  ctx.fill();
  //ada dua pilihan untuk menggambar yaitu fill() dan stroke() , lihat contoh stroke() di bawah
}, 1000);

function drawHour(value) {
  // hitung sudut jarum jam
  // sudut dalam radian
  // rumus asli mengubah sudut derajat menjadi radian adalah:
  // sudut * Math.PI / 180
  // 180 derajat adalah setengah lingkaran
  // digunakan angka 6 karena setengah lingkaran pada jam adalah 6
  // sudut perlu digeser 3 angka, karena sudut 0 mulainya di atas
  // sedangkan sudut aslinya adalah mendatar, pada jam 3
  const angle = ((value - 3) * Math.PI) / 6;

  // dapatkan posisi x ujung jarum berdasarkan nilai cosinus dari sudut
  const lx = Math.cos(angle) * lengthHour;
  // dapatkan posisi y ujung jarum berdasarkan nilai sinus dari sudut
  const ly = Math.sin(angle) * lengthHour;

  //lakukan penggambaran
  ctx.beginPath();
  //pindahkan kursor ke tengah
  ctx.moveTo(centerX, centerY);
  //gambar garis dari tengah sampai ujung jarum
  ctx.lineTo(centerX + lx, centerY + ly);
  //tentukan ketebalan jarum jam
  ctx.lineWidth = widthHour;
  //tentukan warna jarum jam
  ctx.strokeStyle = "#2b1100";
  //gambarkan garisnya
  ctx.stroke();
}

function drawMinute(value) {
  // hitung sudut jarum menit
  // sudut dalam radian
  // rumus asli mengubah sudut derajat menjadi radian adalah:
  // sudut * Math.PI / 180
  // 180 derajat adalah setengah lingkaran
  // digunakan angka 30 karena setengah lingkaran pada menit adalah 30
  // sudut perlu digeser 15 angka, karena sudut 0 mulainya di atas
  // sedangkan sudut aslinya adalah mendatar, pada menit 15
  const angle = ((value - 15) * Math.PI) / 30;

  // dapatkan posisi x ujung jarum berdasarkan nilai cosinus dari sudut
  const lx = Math.cos(angle) * lengthMinute;
  // dapatkan posisi y ujung jarum berdasarkan nilai sinus dari sudut
  const ly = Math.sin(angle) * lengthMinute;

  //lakukan penggambaran
  ctx.beginPath();
  //pindahkan kursor ke tengah
  ctx.moveTo(centerX, centerY);
  //gambar garis dari tengah sampai ujung jarum
  ctx.lineTo(centerX + lx, centerY + ly);
  //tentukan ketebalan jarum menit
  ctx.lineWidth = widthMinute;
  //tentukan warna jarum menit
  ctx.strokeStyle = "#2b1100";
  //gambarkan garisnya
  ctx.stroke();
}

function drawSecond(value) {
  // hitung sudut jarum menit
  // sudut dalam radian
  // rumus asli mengubah sudut derajat menjadi radian adalah:
  // sudut * Math.PI / 180
  // 180 derajat adalah setengah lingkaran
  // digunakan angka 30 karena setengah lingkaran pada menit adalah 30
  // sudut perlu digeser 15 angka, karena sudut 0 mulainya di atas
  // sedangkan sudut aslinya adalah mendatar, pada menit 15
  const angle = ((value - 15) * Math.PI) / 30;
  // dapatkan posisi x ujung jarum berdasarkan nilai cosinus dari sudut
  const lx = Math.cos(angle) * lengthSecond;
  // dapatkan posisi y ujung jarum berdasarkan nilai sinus dari sudut
  const ly = Math.sin(angle) * lengthSecond;

  //lakukan penggambaran
  ctx.beginPath();
  //pindahkan kursor ke tengah
  ctx.moveTo(centerX, centerY);
  //gambar garis dari tengah sampai ujung jarum
  ctx.lineTo(centerX + lx, centerY + ly);
  //tentukan ketebalan jarum detik
  ctx.lineWidth = widthSecond;
  //tentukan warna jarum detik
  ctx.strokeStyle = "#ff0000";
  //gambarkan garisnya
  ctx.stroke();
}
