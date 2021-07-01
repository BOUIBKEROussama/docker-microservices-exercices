const express = require('express')
const app = express()
const port = 8000
const axios = require('axios');


app.get('/message', (req,res)=>{
    res.status(200).json({
        status: 200,
        message: 'ping',
      })
})



app.get('/', (req, res) => {

    res.status(200).json({
        status: 200,
        message: 'ping',
      })

      setTimeout(function(){
        axios.get('http://localhost:8080')
        .then(response => {
          console.log(response.data);
          
        })
        .catch(error => {
          console.log(error);
        });
      }, 1000);
      
      
    
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})