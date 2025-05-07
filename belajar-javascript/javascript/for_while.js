// contoh for while

for (let i = 1; i < 6; i++){
    console.log("perulangan ke : ", i)
}

// penjelasanya seperti ini 

// for (inisialisasi; kondisi; perubahan){
//  console.log("angka : ", i)
//}

let a = 1;

while (a <= 10){
    console.log("angka ke : ", a);
    a++
}

let b = 1;

do {
    console.log("angka ke : ", b);
    b++;
}while (b <= 5)

// for while menggunakan array di javascript

array_file = ['nanas','apple','durian']

for (let array_d of array_file){
    console.log(array_d);
}

// jika menggunakan forEach akan lebih pendek dan hasilnya sama saja
array_file.forEach(nama_buah => {
    console.log(nama_buah)    
});


for (let x = 1; x < 20; x++){
    modulus = x % 2

    console.log("Perulangan berikut modulus : ", modulus)
}