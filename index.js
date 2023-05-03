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
app.get("/recipies/:id",(req,res)=>{
    const id=req.params.id;
    const recipie=recipies.find(reci=>reci._id===id)
    res.send(recipie)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })