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
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})


app.get('/', (req, res) => {


    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Listenting on port 3000')
})