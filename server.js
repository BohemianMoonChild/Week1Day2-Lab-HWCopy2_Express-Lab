// ===Import Express===
const express = require('express')


// ===Import Router===
const app = express()
const PORT = 7000           //Listens

// === Root Route===
app.get('/', (req, res) => {
    console.log('Running!')
    res.send('run a test ...')
})





// ===Set-Up View Engine===
app.set('view engine', 'ejs')


// ====Middleware=== [inform to grab request and publish into json]
app.use(express.json())                         //Parse request into Json
app.use(express.urlencoded({extended: false}))  //Parse into JavaScript Object
app.set('views', './Views')                     //Location of Views






// ===APP LISTENER===
app.listen(PORT,() => {
    console.log(`Server is running on port: ${PORT}`);
})