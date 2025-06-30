import express from 'express'
import {PORT} from './env.js'; 


const app = express()
const port = 5517

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('*error', (req, res) => {
    return res.send('ERROR PAGE');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${PORT}`)
})