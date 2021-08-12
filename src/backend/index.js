const express = require('express');
const app = express();
const methods = require('./routes/index.js')

//middeleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// //routes
app.use('/', methods)


app.listen(3000)
console.log('server on port 3000')