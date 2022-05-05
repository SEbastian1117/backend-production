const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()



const app = express()
const dataBaseConnection = require('./db/config')
const port = process.env.PORT

//database conecction
dataBaseConnection()
const api = require('./routes/api')

//cors
app.use( cors() )

//public directory
app.use(express.static('public'))

//leer y parsear body
app.use( express.json() )

//routes
app.use( '/api', api)

app.get('*', (req, res) => {
    res.sendFile(path.resolve( __dirname, 'public/index.html' ))
})

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`)
})