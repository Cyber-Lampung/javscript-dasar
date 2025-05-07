// oop dasar dalam javascript

const mobile = {
    merk: "toyota",
    warna: "merah",
    jalan: function(){
        console.log("mobile berjalan");
    }
}

mobile.jalan()  // output : mobile berjalan

// latihan 

const person = {
    Nama: "Rado",
    Alamat: "Tanjung sari",
    Belajar: function(){
        console.log("belajar frontend");
    }
};

person.Belajar() // output : belajar frontend


// oop class

class motor{
    constructor(merk, warna){
        this.merk = merk;
        this.warna = warna;
    }

    jalan(){
        console.log((`motor ${this.merk} dan berwarna ${this.warna} sedang berjalan`))
    }
}

const motor1 = new motor("yamaha","kuning");
motor1.jalan() // output : motor yamaha dan berwarna kuning sedang berjalan


// pewarisan
// subclass mewarisi properti dan method dari class induk

class Kendaraan {
    constructor(jenis){
        this.jenis =  jenis;
    }

    info(){
        console.log(`ini adalah kendaraan jenis ${this.jenis}`);
    }
}

class motorKendaraan extends Kendaraan {
    constructor(merk) {
        super("Motor");
        this.merk = merk;
    }

    bunyi() {
        console.log(`${this.merk} berbunyi vroom`);
    }
}

const motor2 = new motorKendaraan("Yamaha");

motor2.info() // ini adalah jenis kendaraaan yamaha
motor2.bunyi() // yamaha berbunyi vroom


// private type data dalam javascript = encapsulation

class user {
    #password; // private method

    constructor (username, password){
        this.username = username;
        this.#password = password;
    }

    cekpassword(input){
        return input === this.#password;
    }

}

const user1 = new user("rado","rahasia");

console.log(user1.cekpassword("salah"));// false
console.log(user1.cekpassword("rahasia"));// true


// subclass bisa mengubah superclass / class utama = polymorphism

class hewan{
    suara (){
        console.log("hewan Besuara");
    }
}

class Kucing extends hewan{
    suara() {
        console.log("meong");
    }
}

const kucing = new Kucing();
kucing.suara() // output : meong

