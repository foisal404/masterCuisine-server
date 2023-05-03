const express=require('express')

var cors = require('cors')
var app = express()

app.use(cors())

const port=5000

const recipies=require('./data/recipies.json')

app.get('/',(req,res)=>[
    res.send('Chef is running')
])

app.get('/recipies',(req,res)=>{
    res.send(recipies)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })