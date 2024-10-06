let namaSaya: string;
namaSaya = "Abah Six Pack"

let umurSaya: number;
umurSaya = 20

let isdead: boolean;
isdead = true

let kondisiType: string | number;
kondisiType = "Abah";
kondisiType = 20;

let pacarSaya: string[];
pacarSaya = ["pacar 1", "pacar 2", "pacar 3"];

let selingkuhanSaya: [string, number, boolean];
selingkuhanSaya = ["selingkuhan 1", 1, true];

// CUSTOM TYPE DATA
type TemanType = {
    nama: string;
    isKampret: boolean;
    hutang?: number; // tanda tanya untuk optional
}

let temanKita: TemanType;
temanKita = {
    nama: "Pentong",
    isKampret: true,
    hutang: 100000
}

// contoh optional
temanKita = {
    nama: "Pentong",
    isKampret: true
}

function create(): string {
    return "Hello World";
}

const create2 = (): string => {
    return "Hello World";
}

// Function type void adalah function yang langsung mengembalikan undefined
// Atau yang akan langusng mengeksekusi, biasanya untuk debuging
function salam(): void {
    console.log("Salam Pagi");
}

// parameter pada void function
function sayHello(name: string, umur: number): void { // harus memiliki type untuk parameter sesuai yang di isikan ketika executing
    console.log(`Hello ${name} anda berumur ${umur}`);
}

sayHello("Abah Six Pack", 20); // harus diisi value

// bukan void function
function tambahData(a: number, b: number): number { // type number pada tambahData adalah expektasi return
    return a + b; // jika bukan void maka dia harus mengembalikan value
}

function tambahDesc(a: number, b: number): string { // type string pada tambahData adalah expektasi return
    return `${a} + ${b} = ${a + b}`; // jika bukan void maka dia harus mengembalikan value
}

const result = tambahDesc(1, 2);


// INTERFACES
type utangName = "cicilan" | "baru dp" | "di bayarin";
type utang = boolean | utangName;
interface IKeranjang {
    barang: string;
    jumlah: number;
    harga: number;
}

interface IKeranjang {
    lunas: utang;
    karegori: "pria" | "wanita" | "anak"; // asign seperti ini, artinya nilai hanya boleh pria, wanita, atau anak
}

interface Wanita extends IKeranjang {
    diskon?: number;
}

interface Pria extends IKeranjang {
    promo : boolean;
}

function beli(kerangjang: IKeranjang): void {
    console.log("Pembelian", kerangjang)
}

function beliPria(kerangjang: Pria): void {
    console.log("Pembelian Pria", kerangjang)
}

function beliWanita(kerangjang: Wanita): void {
    console.log("Pembelian Wanita", kerangjang)
}

const belanja: IKeranjang = {
    barang: "baju",
    jumlah: 1,
    harga: 10000,
    lunas: true,
    karegori: "anak" // coba ganti dewasa
}

const pakeanPria: Pria = {
    barang: "baju",
    jumlah: 1,
    harga: 10000,
    lunas: true,
    karegori: "pria",
    promo: true
}

const pakeanWanita: Wanita = {
    barang: "baju",
    jumlah: 1,
    harga: 10000,
    lunas: "cicilan",
    karegori: "wanita",
    diskon: 10
}

beli(belanja);
beliPria(pakeanPria);
beliWanita(pakeanWanita);