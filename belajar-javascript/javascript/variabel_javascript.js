// let adalah sebuah variabel yang bisa diganti isinya
// const tidak bisa diubah nilai nya
// var cara lama cuman tidak disarankan

// contoh let

let hobi = "Membaca"

console.log(hobi)

hobi = "coding"

console.log(hobi)

// contoh const

const Const = "Rado"

console.log(Const)

//Const = "Aku siapa" // => maka ini tidak bisa diubah dan gagal jika di console.log

//console.log(Const) // => Uncaught TypeError: invalid assignment to const 'Const' <anonymous> http://127.0.0.1:5500/javascript/variabel_javascript.js:21variabel_javascript.js:21:1


// variabel tanpa isi akan menyebabkan undifined CONTOH : 

let alamat;

console.log(alamat) // output => undefined

let name = "Rado Hidayatulloh"
let umur = 17
const negara = "Indonesia"

console.log("Nama kamu : ", name)
console.log("Umur kamu : ", umur)
console.log("Negara kamu : ", negara)