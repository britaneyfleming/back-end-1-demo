const express = require('express')
const cors = require('cors')
const e = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

let inventory = ["greeting card", "wagon", "computer", "table", "chair", "milk", "sailboat", "conditioner", "rusty nail", "desk",];

app.get('/api/inventory', (req, res) => {
    //console.log('req:', req, '------', 'res:', res)
    if (!req.query) {
        res.status(200).send(inventory);
    } else {
        console.log(req.query.item)
    }
   
})

app.get('/api/inventory/:id', (req, res) => {
    //console.log(req.params)
    res.status(200).send(inventory[+req.params.id])
})
app.listen(5050, () => console.log('server jammin on port 5050'))