const express = require('express')

const app = express()


const { Client } = require('pg')
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'example',
    port: 5432
})


app.get('/', (req, res) => {

    client.connect()

    client.query('SELECT NOW()', (err, res) => {
        console.log(err, res)
        res.send(res)
        client.end()
    })

})

app.listen(3000, () => {
    console.log('Listenting on port 3000')
})