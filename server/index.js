const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static(path.join(__dirname, '../wwwroot')));

app.listen(port, () => {
    console.log(`Webshop running at http://localhost:${port}`)
})