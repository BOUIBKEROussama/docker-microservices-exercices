const express = require('express')
const app = express()
const port = 8080
const axios = require('axios');





app.get('/serv1', (req, res) => {
    //ici nous envoyons l'adresse du serveur 2
    res.status(200).json({
        status: 200,
        message: 'http://localhost:5372',
    })
})


app.get('/serv2', (req, res) => {
    //ici nous envoyons l'adresse du serveur 1
    res.status(200).json({
        status: 200,
        message: 'http://localhost:4567',
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})