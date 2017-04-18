const express = require("express")
const bp = require("body-parser")
const app = express()
const c = require("./classes")

objektid = {
    joogid: {},
    pudelid: {},
    vaadid: {},
    kastid: {}
}

app.use(bp.json())

app.get("/:ese", (req,res) => {
    if(objektid[req.params.ese]){
        res.json(objektid[req.params.ese])
    } else {
        res.json("haha nope")
    }
})

app.get("/:ese/:id", (req,res) => {
    if(objektid[req.params.ese][req.params.id]) {
        res.json(objektid[req.params.ese][req.params.id])
    } else {
        res.json("Sellist objekti ei eksisteeri.")
    }
})

app.delete("/:ese/:id", (req,res) => {
    if(objektid[req.params.ese][req.params.id]) {
        delete objektid[req.params.ese][req.params.id]
        res.json(objektid[req.params.ese])
    } else {
        res.json("Sellist objekti ei eksisteeri.")
    }
})

app.post("/jook/uus", (req,res) => {
    let b = req.body
    let uusjook = new c.Jook(b.nimetus, b.hind, b.kaal)
    objektid.joogid[uusjook.id] = uusjook
    res.json(uusjook)
})

app.post("/pudel/uus", (req,res) => {
    let b = req.body
    let uuspudel = new c.Pudel(b.maht, b.tyyp, b.kaal, b.hind, objektid.joogid[b.jook])
    objektid.pudelid[uuspudel.id] = uuspudel
    res.json(uuspudel)
})

app.post("/vaat/uus", (req,res) => {
    let b = req.body
    let uusvaat = new c.Vaat(b.maht, b.sees)
    objektid.vaadid[uusvaat.id] = uusvaat
    res.json(uusvaat)
})

app.post("/kast/uus", (req,res) => {
        let o = objektid
    let b = req.body
    let uuskast = new c.Kast(b.tyyp, b.hind, b.mass, b.pesad)
    objektid.kastid[uuskast.id] = uuskast
    res.json(uuskast)
})

app.listen(3000, () => console.log("Server kuulab porti 3000"))
