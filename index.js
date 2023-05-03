const express=require('express')
var cors = require('cors')
var app = express()
app.use(cors())
const port=5000

const recipies=require('./data/recipies.json')
const chefs=require('./data/chefs.json')

app.get('/',(req,res)=>[
    res.send('Chef is running')
])

//recipies
app.get('/recipies',(req,res)=>{
    res.send(recipies)
})
app.get("/recipies/:id",(req,res)=>{
    const id=req.params.id;
    const recipie=recipies.find(reci=>reci._id===id)
    res.send(recipie)
})

// chefs 
app.get('/chefs',(req,res)=>{
    res.send(chefs)
})

app.get('/chefs/:id',(req,res)=>{
    const id=req.params.id;
    const chef=chefs.find(che=>che._id===id)
    res.send(chef)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })