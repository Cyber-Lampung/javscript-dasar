// pelajaran array dasar yang harus dipelajari adalah method dasar dan method iterasi

// contoh method dasar = push(), pop(), shift(), unshift(), slice(), splice()

// contoh method iterasi = forEach(), map(), filter(), reduce(), find()

// array itu adalah struktur data yang digunakan untuk menyimpan sekumpulan data atau nilai dalam 1 variabel dan isinya bisa berupa (angka , string, object, bahkan dalam array bisa isi array lain) dan array dalam javscript itu bersifat dinamis artinya isinya bisa diubah ubah

// contoh array literal
let buah = ['apple', 'jeruk', 'mangga', 'nanas']
console.log(buah)

// contoh array menggunakan constructor (new array())

let angka_1 = [1,2,3,4,5];
console.log(angka_1)

let angka_2 = new Array(1,2,3,4,5)
console.log(angka_2)

console.log("Contoh mengakses element array")

console.log(buah[0]) // => output => apple

// method dasar array

// push() => menambahkan elemen atau data ke akhir baris

buah.push("durian")

console.log(buah) // output => ['apple', 'jeruk', 'mangga', 'nanas', 'durian']

// pop() => menghapus element terakhir dirray

buah.pop()

console.log(buah) // maka durian akan diapus dari array ['apple', 'jeruk', 'mangga', 'nanas']

// shift() => menghapus element pertama dalam array

buah.shift()

console.log(buah) // maka data apple akan dihapus ['jeruk', 'mangga', 'nanas']

// unshift() => menambahkan data keawal array

buah.unshift("leci")

console.log(buah) // output => [ 'leci', 'jeruk', 'mangga', 'nanas' ]

// length() => menghitung data yang ada dalam array

console.log(buah.length) // output => 4

// method iterasi dalam array 


console.log("ARRAY METHOD ITERASI")

// contoh metode forEach() => jadi forEach() untuk membuat menjalankan function untuk setip array

let number = [1, 2, 3];
number.forEach((num) => {
    console.log(num * 2); // output => 2,4,6
})

// map() => digunakan untuk membuat array baru dengan angka yang dihasilkan oleh forEach()

let dikalidua = number.map((num) => num * 2);
console.log(dikalidua) // outut => [2, 4, 6]

// filter() => membuat array baru dengan elemen yang memenuhi kondisi

let lebihBesarDariDua = number.filter((num) => num > 2);
console.log(lebihBesarDariDua) // output  => [3]

// reduce() => adalah menggabungkan semua elemen array menjadi satu nilai

let total = number.reduce((sum, num) => sum + num, 0)
console.log(total) // output => 6

// find() => digunakan untuk mencari sebuah nilai paling besar atau ada atau tidak dalam list atau array atau mengembalikan elemen pertama jika memenuhi kondisi

let ditemukan = number.find((num) => num > 2)
console.log(ditemukan)

// sort() => mengurutkan elemen array

let acak = [1,3,2,9,6]
acak.sort()
console.log(acak) // output => [ 1, 2, 3, 6, 9 ]

// includes() => memriksa apakah array mengandung elemen tertentu

console.log(number.includes(20)) // output => true karena 2 ada dalam number

// ARRAY MULTIDIMENSI

// array bisa berisi array lain, ini disebut array multidimensi

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(matrix[1][1]) // output => 5 karena pada elemen 1 yaitu kebawah dan 2 ke kanan jadi dapetnya [1] => akan kebawah jadi [4] dan [1] akan mengarah kesamping jadi dapetnya 5 karena array dimulai dari 0

// array spread operator function nya adalah untuk menggabungkan arr1 dan arr2

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let gabungan = [...arr1, ...arr2]
console.log(gabungan) // output => [1,2,3,4,5,6]

// destructuring array adalah untuk mengextract nilai dari array variabel terpisah 

let [pertama, kedua] = [1,2,3]
console.log(pertama) // output => 1 karena pada array pertama itu datanya 1
console.log(kedua) // output => 2 karena pada array kedua itu datanya 2

