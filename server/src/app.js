const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyparser.json())
app.use(cors())

app.get('/status', (req,res) =>{res.send({
    message: "Hello aina"
})})

app.post('/register', (req,res) =>{res.send({
    message: `${req.body.email} successully registered!`
})})


app.listen(8081)