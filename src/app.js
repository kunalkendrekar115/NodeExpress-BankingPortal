const fs = require("fs")
const path = require("path")
const express = require("express")

const app = express()

app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');

const accountData = fs.readFileSync(path.join(__dirname, '/json/accounts.json'), "UTF8")
const accounts = JSON.parse(accountData)

const userData = fs.readFileSync(path.join(__dirname, '/json/users.json'), "UTF8")
const users = JSON.parse(userData)

app.get('/savings', function (req, res) {
    res.render('account', { account: accounts.savings })
})

app.get('/checking', function (req, res) {
    res.render('account', { account: accounts.checking })
})

app.get('/credit', function (req, res) {
    res.render('account', { account: accounts.credit })
})

app.get('/profile', function (req, res) {
    res.render('profile', { user: users[0] })
})

app.get('/', function (req, res) {
    res.render('index', { title: 'Account Summary', accounts: accounts })
})

app.listen(3000, function () { console.log('PS Project running on port 3000!') })

