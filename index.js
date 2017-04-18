let c = require("./classes")

let limonaad = new c.Jook("Tartu Limonaad",0.65,1)

let limpsipudel = new c.Pudel(0.5,"plast",0.03,0.06,limonaad)

console.log(`Limpsipudeli kaal on ${limpsipudel.arvutaKaal()} kg`)
console.log(`Limpsipudeli omahind on ${limpsipudel.arvutaHind()}€`)

let tynn = new c.Vaat(30, 7.5)

console.log(`Mitu pudelit vaadist tuleb? ${tynn.bottleAll(limpsipudel)}!`)
console.log(`Vaadis on alles ${tynn.sees} liitrit jooki.`)
let limpsikast = new c.Kast("puit",2,0.5,20)
console.log(limpsikast.lisaPudel(limpsipudel))
console.log(limpsikast.lisaPudel(limpsipudel))

