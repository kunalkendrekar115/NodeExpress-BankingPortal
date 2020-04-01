const fs = require("fs")
const path = require("path")
const express = require("express")
const accountRoutes = require("./routes/accounts")
const servicesRoutes = require("./routes/services")

const data = require('./data')

const { users, accounts } = data
const app = express()

app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))

app.use('/account',accountRoutes)
app.use('/services',servicesRoutes)


app.get('/profile', function (req, res) {
    res.render('profile', { user: users[0] })
})

app.get('/', function (req, res) {
    res.render('index', { title: 'Account Summary', accounts: accounts })
})

app.listen(3000, function () { console.log('PS Project running on port 3000!') })

