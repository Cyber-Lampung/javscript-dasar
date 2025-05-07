// operator dalam javascript

let a = 10;
let b = 10;


console.log(a + b) // output => 20
console.log(a - b) // output => 0
console.log(a * b) // output => 100
console.log(a / b) // output => 1
console.log(a % b) // output => 0


// berikut beberapa operator perbandingan 

// == digunakan untuk mengecek apakah sama tanpa harus mengecek type hasil = True
// === mengecek sebuah data apakah sama dengan mengecek juga data typenya apakah sama hasil contoh x === y hasil = False
// != tidak sama dengan contoh x != y hasil = false
// !== tidak sama dengan tetapi dengan mengecek type hasil x !== y hasil = true
// > lebih besar contoh x > 5 hasil = true
// < lebih kecil contoh x < 5 hasil = false

// contoh == true

let x = 10
let y = "10"

sama_dengan = x == y

console.log(sama_dengan) // output => true kenapa true karena hasil atau isinya sama yaitu sama sama a = 10 dan b 10

mengecek_type = x === y

console.log(mengecek_type) // output => false karena type data ini mengecek data apakah sama

tidak_sama_dengan = x != y

console.log(tidak_sama_dengan) // output => false karena nilai nya kan sama

tidak_sama_dengan_tetapi_mengecek_typenya = x !== y

console.log(tidak_sama_dengan_tetapi_mengecek_typenya) // output => true karena type datanya beda

lebih_besar = x > 5

console.log(lebih_besar) // output => true karena nilai x lebih besar dari 5

lebih_kecil = y < 20

console.log(lebih_kecil) // output => true karena y lebih kecil dari 20

// operator logika

// and atau && adalah ketika 2 data yang memiliki isi sama contoh : x && y hasil = true
// || atau or adalah ketika salah satu harus bersifat true contoh : x = true ` y = false hasil = true
// ! atau not adalah sebuah logika untuk membalik data dari true ke false atau sebaliknya variabel : x = true contoh : !x maka hasilnya x = false

// contoh operator logika

let c = true;
let d = false;

and = c && d

console.log(and) // output => hasilnya adalah false karena hasilnya atau isi data nya beda

or = c || d

console.log(or) // output => hasilnya adalah  true karena salah satu bersifat true yaitu c = true

not = !c

console.log(not) // output => hasilnya adalah false karena tipe data dalam c adalah true maka akan diubah ke false

// OPERATOR PENUGASAN

// = adalah operator sama dengan contoh x = 10
// += adalah type data seperti ini x = x + 5 jadi di itu contoh kalo di program yaitu hasil += 10 jadi sama seperti ini hasil = hasil + 10
// -= jika ini hanya kebalikan dari += cuman ini dikurang contoh : hasil = hasil - 10
// *= pengertiannya sama saja seperti diatas contoh :  hasil = hasil * 10
// /= pengertiannya sama juga yaitu seperti ini contoh : hasil = hasil / 10

// CONTOH DALAM PROGRAM 

let e = 10 // ini adalah contoh dari sebuah operator = 
let f = 10

e = e + f

console.log(e) // output => 20 karena ya sama saja jadi e + f 

f = f - e

console.log(f) // output => 0 karena ya sama aja jadi f - e

// bisa juga seperti ini 

console.log(f *= e) // hasilnya adalah ya 100 karena itu sama aja jika mengalikan sebuah e dengan f ya hasilnya 100 10 x 10 = 100


console.log("ini penjumlahan")
const tambah = (a, b) => a + b
console.log(tambah(2, 10))