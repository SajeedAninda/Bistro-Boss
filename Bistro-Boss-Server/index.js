const express = require('express')
let cors = require("cors");
const app = express()
require('dotenv').config()

app.use(cors());
app.use(express.json());


const port = process.env.PORT || 5000



app.get('/', (req, res) => {
    res.send('Bistro Server Running!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})