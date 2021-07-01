const express = require('express')
const app = express()
const port = 4567
const axios = require('axios');





app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'pong',
  })

  //appel du serveur 3 pour recuperer l'adresse

  axios.get('http://localhost:8080/serv1').then(res=>{
    var adresse2 =res.data.message
    setTimeout(function(){
        axios.get(adresse2+'/message')
        .then(response => {
          console.log(response.data);
          
        })
        .catch(error => {
          console.log(error);
        });
      },1000)
  }).catch(err=>{
      console.log("erreur serveur 2")
  })


  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)

  
  axios.get('http://localhost:8080/serv1').then(res=>{
    var adresse=res.data.message
    axios.get(`${adresse}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("erreur serveur 2");
    });
  }).catch(err=>{
    console.log("erreur dans le lancement du serveur 3")
  })

  
})