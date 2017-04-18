let c = require("./classes")

let limonaad = new c.Jook("Tartu Limonaad",0.65,1)

let limpsipudel = new c.Pudel(0.5,"plast",0.03,0.06,limonaad)

console.log(`Limpsipudeli kaal on ${limpsipudel.arvutaKaal()} kg`)
//Limpsipudeli kaal on 0.53 kg
console.log(`Limpsipudeli omahind on ${limpsipudel.arvutaHind()}€`)
//Limpsipudeli omahind on 0.385€

let tynn = new c.Vaat(30, 7.5)

console.log(`Mitu pudelit vaadist tuleb? ${tynn.bottleAll(limpsipudel)}!`)
//Mitu pudelit vaadist tuleb? 15!

console.log(`Vaadis on alles ${tynn.sees} liitrit jooki.`)
//Vaadis on alles 0 liitrit jooki.

let limpsikast = new c.Kast("puit",2,0.5,20)
console.log(limpsikast.lisaPudel(limpsipudel))
/*
[ Pudel {
    id: 'e7022409',
    maht: 0.5,
    tyyp: 'plast',
    mass: 0.03,
    taarahind: 0.06,
    jook: Jook { id: 'b597bc0f', nimetus: 'Tartu Limonaad', hind: 0.65, kaal: 1 } } 
]
*/
console.log(limpsikast.lisaPudel(limpsipudel))
/*
[ Pudel {
    id: 'e7022409',
    maht: 0.5,
    tyyp: 'plast',
    mass: 0.03,
    taarahind: 0.06,
    jook: Jook { id: 'b597bc0f', nimetus: 'Tartu Limonaad', hind: 0.65, kaal: 1 } },
  Pudel {
    id: 'e7022409',
    maht: 0.5,
    tyyp: 'plast',
    mass: 0.03,
    taarahind: 0.06,
    jook: Jook { id: 'b597bc0f', nimetus: 'Tartu Limonaad', hind: 0.65, kaal: 1 } }
]
*/

