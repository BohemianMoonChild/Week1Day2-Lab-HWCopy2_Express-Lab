// ===Import Express===
const express = require('express')


// ===Import Router===
const app = express()
const PORT = 7000


// ===Set-Up View Engine===
app.set('view engine', 'ejs')


// ====Middleware=== [inform to grab request and publish into json]
app.use(express.json())                         //Parse request into Json
app.use(express.urlencoded({extended: false}))  //Parse into JavaScript Object
app.set('views', './Views')                     //Location of Views


