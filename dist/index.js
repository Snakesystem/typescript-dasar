"use strict";
let namaSaya;
namaSaya = "Abah Six Pack";
let umurSaya;
umurSaya = 20;
let isdead;
isdead = true;
let kondisiType;
kondisiType = "Abah";
kondisiType = 20;
let pacarSaya;
pacarSaya = ["pacar 1", "pacar 2", "pacar 3"];
let selingkuhanSaya;
selingkuhanSaya = ["selingkuhan 1", 1, true];
let temanKita;
temanKita = {
    nama: "Pentong",
    isKampret: true,
    hutang: 100000
};
// contoh optional
temanKita = {
    nama: "Pentong",
    isKampret: true
};
function create() {
    return "Hello World";
}
const create2 = () => {
    return "Hello World";
};
// Function type void adalah function yang langsung mengembalikan undefined
// Atau yang akan langusng mengeksekusi, biasanya untuk debuging
function salam() {
    console.log("Salam Pagi");
}
// parameter pada void function
function sayHello(name, umur) {
    console.log(`Hello ${name} anda berumur ${umur}`);
}
sayHello("Abah Six Pack", 20); // harus diisi value
// bukan void function
function tambahData(a, b) {
    return a + b; // jika bukan void maka dia harus mengembalikan value
}
function tambahDesc(a, b) {
    return `${a} + ${b} = ${a + b}`; // jika bukan void maka dia harus mengembalikan value
}
const result = tambahDesc(1, 2);
function beli(kerangjang) {
    console.log("Pembelian", kerangjang);
}
function beliPria(kerangjang) {
    console.log("Pembelian Pria", kerangjang);
}
function beliWanita(kerangjang) {
    console.log("Pembelian Wanita", kerangjang);
}
const belanja = {
    barang: "baju",
    jumlah: 1,
    harga: 10000,
    lunas: true,
    karegori: "anak" // coba ganti dewasa
};
const pakeanPria = {
    barang: "baju",
    jumlah: 1,
    harga: 10000,
    lunas: true,
    karegori: "pria",
    promo: true
};
const pakeanWanita = {
    barang: "baju",
    jumlah: 1,
    harga: 10000,
    lunas: "cicilan",
    karegori: "wanita",
    diskon: 10
};
beli(belanja);
beliPria(pakeanPria);
beliWanita(pakeanWanita);
