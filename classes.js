crypto = require("crypto")

const Abi = class {
    static hash() {
        var current_date = (new Date()).valueOf().toString();
        var random = Math.random().toString();
        return crypto.createHash('sha1').update(current_date + random).digest('hex').substring(0,8)
    }
}

const Jook = class {
    constructor(nimetus, hind, kaal){
        this.id = Abi.hash()
        this.nimetus = nimetus
        this.hind = hind
        this.kaal = kaal
    }
}

const Pudel = class {
    constructor(maht,tyyp,mass,taarahind,jook){
        this.id = Abi.hash()
        this.maht = maht
        this.tyyp = tyyp
        this.mass = mass
        this.taarahind = taarahind
        this.jook = jook
    }
    prindi() {
        return `
            maht: ${this.maht},
            tyyp: ${this.tyyp},
            mass: ${this.mass},
            taara: ${this.taarahind},
            jook: ${this.jook}        
        `
    }
    arvutaKaal() {
        let kaal = this.mass
        if(this.jook) {
            kaal += (this.jook.kaal * this.maht)
        }
        return kaal
    }
    arvutaHind() {
        let hind = this.taarahind
        if(this.jook) {
            hind += this.jook.hind * this.maht
        }
        return hind
    }
}

const Vaat = class {
    constructor(maht,sees) {
        this.id = Abi.hash()
        this.maht = maht
        this.sees = sees
    }
    bottle(pudel) {
        kogus = pudel.maht
        if(this.maht >= kogus) {
            this.maht -= kogus
        }
        return(this.maht)
    }

    bottleAll(pudel) {
        let pudeleid = 0;
        while(this.sees>=pudel.maht) {
            this.sees -= pudel.maht
            pudeleid ++
        }
        return pudeleid
    }
}

const Kast = class {
    constructor(tyyp, hind, mass, pesad){
        this.id = Abi.hash()
        this.tyyp = tyyp
        this.hind = hind
        this.mass = mass
        this.pesad = pesad
        this.pudelid = []
    }
    lisaPudel(pudel) {
        if(this.pudelid.length<this.pesad){
            this.pudelid.push(pudel)
        } else {
            return `Kast on täis!`
        }
        return this.pudelid
    }
    
    arvutaKaal() {
        let baas = this.mass
        this.pudelid.forEach(pudel => baas += pudel.mass)
        return baas
    }

    arvutaHind() {
        let baas = this.mass
        this.pudelid.forEach(pudel => baas += pudel.hind)
        return baas
    }
}

module.exports = { Jook, Pudel, Vaat, Kast }