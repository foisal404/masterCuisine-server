const express=require('express')

var cors = require('cors')
var app = express()

app.use(cors())

const port=5000

app.get('/',(req,res)=>[
    res.send('Chef is running')
])

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })