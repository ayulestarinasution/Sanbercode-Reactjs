//Soal 1 ( Membuat Function dengan return String )
function cetakFunction() {
return "Hallo Nama Saya Ayu Lestari Nasution"; }
console.log(cetakFunction());

//Soal 2 ( Membuat Function dengan rumus penjumlahan didalamnya)
function myFunction(angka1 , angka2){ 
    return angka1 + angka2
}
   console.log(myFunction(20, 7))

//Soal 3 ( Mengubah dalam bentuk arrow function )
const Hello = () =>{
    return "Hello" }
   console.log(Hello());
//soal 4 ( Memanggil key dalam sebuah object )
let obj = {
    nama : "john",
    umur : 22,
    bahasa : "indonesia" }
    console.log(obj.bahasa)

//soal 5 ( mengubah array menjadi object )
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];

let objDaftarPeserta = {
  nama: arrayDaftarPeserta[0],
  jenisKelamin: arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  tahunLahir: arrayDaftarPeserta[3]
};
console.log(objDaftarPeserta);

//soal 6( Membuat sebuah array of object dan melakukan filter )
let buah = [
    {nama: "Nanas", warna: "Kuning", adaBijinya: false, harga: 9000},
    {nama: "Jeruk", warna: "Oranye", adaBijinya: true, harga: 8000},
    {nama: "Semangka", warna: "Hijau & Merah", adaBijinya: true, harga: 10000},
    {nama: "Pisang", warna: "Kuning", adaBijinya: false, harga: 5000}
  ];
  let buahTanpaBiji = buah.filter(item => item.adaBijinya === false);
  console.log(buahTanpaBiji);
//Soal 7 ( Destructuring pada Object )
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020
 }
 const { name, brand,year } = phone
 console.log(name, brand, year)
 
 //soal 8 ( Spred Operator pada Object )
 let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020 
  }
  
  let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
  }
  let objOutput = {...buku, ...dataBukuTambahan};
    console.log(objOutput) 
//soal 9 ( Penggunaan Function dan Object )
let mobil = {
    merk: "bmw",
    color: "red",
    year: 2002
  }
  
  const functionObject = (param) => {
    return param
  }
  
  console.log(functionObject(mobil));
  
  