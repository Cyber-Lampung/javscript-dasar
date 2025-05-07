// contoh if else

let angka = -5;

if (angka <= 5){
    console.log("angka kurang dari 5")
}

else{
    console.log("angka lebih dari 5")
}

let umur = 21;

if (umur <= 10){
    console.log("kamu masih anak anak");
}

else if (umur >= 10 && umur <= 20){
    console.log("Kamu sudah remaja");
}

else if(umur > 20){
    console.log("Kamu sudah dewasa");
}

// ternalary operator / if else singkat

let nilai = 90;

if (nilai == 80){ console.log("Nilai sudah bagus") } else if (nilai >= 80){ console.log("nilai sangat bagus") }