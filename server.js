// ===Import Express===
const express = require('express')


// ===Import Router===
const app = express()
const PORT = 7000                   //Listens


// ===Set-Up View Engine===
app.set('view engine', 'ejs')
app.set('views', './Views')         //Location of Views


// === Root Route===
app.get('/', (req, res) => {
    res.render('home', {
        pageTitle: 'Express Lab', 
        landingPage: 'Home Page'})

    // console.log('Running!')         //COMMENT OUT === used for testing route
    // res.send('run a test ...')      //Response to the Call
})

// === Create Multiple Routes ===
app.get('/bread', (req, res) => {       //Folder Location
    res.render('Bread')                 //Enter in URL after Port to Render
})

app.get('/spreads', (req, res) => {
    res.render('Spreads')
})

app.get('/bakedToday', (req, res) => {
    res.render('bakedToday')
})

app.get('/cakes', (req, res) => {
    res.render('cakes')
})

app.get('/muffins', (req, res) => {
    res.render('muffins')
})

app.get('/pastries', (req, res) => {
    res.render('pastries')
})

app.get('/pies', (req, res) => {
    res.render('pies')
})

app.get('/scones', (req, res) => {
    res.render('scones')
})

app.get('/toppings', (req, res) => {
    res.render('toppings')
})

app.get('/specialOrders', (req, res) => {
    res.render('specialOrders')
})







// ====Middleware=== [inform to grab request and publish into json]
app.use(express.json())                         //Parse request into Json
app.use(express.urlencoded({extended: false}))  //Parse into JavaScript Object







// ===APP LISTENER===
app.listen(PORT,() => {
    console.log(`Server is running on port: ${PORT}`);
})