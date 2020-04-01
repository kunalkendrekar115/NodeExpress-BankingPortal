const fs = require("fs")
const path = require("path")
const express = require("express")

const app = express()

app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    res.render('index', { title: 'Index' })
})

app.listen(3000, function () { console.log('PS Project running on port 3000!') })

