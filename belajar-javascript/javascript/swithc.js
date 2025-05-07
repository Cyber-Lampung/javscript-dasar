// contoh switch dalam javscript

let hari = 1;
let namahari;

switch (hari){
    case 1:
        namahari = "Senin"
        break

    case 2:
        namahari = "Selasa"
        break

    case 3:
        namahari = "Rabu"
        break
    
    case 4:
        namahari = "Kamis"
        break

    case 5:
        namahari = "Jumat"
        break

    case 6:
        namahari = "Sabtu"
        break

    case 7:
        namahari = "Minggu"
        break
}

console.log(namahari)

// contoh switch lain dengan cara menggabungkan beberapa ekspresi menjadi 1

let nilai = "D";

switch (nilai){
    case "A":
    case "B":
    case "C":
        console.log("anda lulus")
        break

    case "D":
        console.log("anda hampir lulus")
        break

    case "E":
        console.log("Silahkan mengulang")
}

// switch untuk true or false

let angka = 21;

switch (true && false){
    case true:
        if (angka >= 0 && angka <= 10){
            console.log("angka kamu antar 1 - 9")
        }
        break

    case false:
        if (angka >= 10 && angka <= 20){
            console.log("angka kamu antara 10 - 19")
        }
        break

    // default:
    //     console.log("angka anda diluar range") => ini gak bisa dipake karena kita sudah menggunakan sebuah case false
    //     break
}