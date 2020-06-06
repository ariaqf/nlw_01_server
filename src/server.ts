import express from 'express'

const app = express()

app.get('/users', (request, response) => {
    console.log("Teste")
    response.json(['Teste1', 'Teste2'])
});

app.listen(3333)