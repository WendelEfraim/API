const express = require('express')
const app = express()

app.use(express.json())

app.post('/createporduct', (req,res) => {
    const product = req.body.product
    const price = req.body.price
    if(!product){
        res.status(422).json({message: 'O campo produto é obrigatório!'})
        return
    }

    console.log(product)
    console.log(price)

    res.status(201).json({message: `Produto '${product}' foi criado com sucesso!`})
})

app.get('/', (req,res) => {
    res.status(200).json({message: 'Primeira rota criada com sucesso!'})
})

app.listen(3000)