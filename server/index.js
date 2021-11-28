const X = require('express')
const APP = X()
const PORT = 3000
const PATH = require('path');

APP.use(X.static(PATH.join(__dirname, '../public')));

APP.listen(PORT, () => {
    console.log(`Webshop running at http://localhost:${PORT}`)
})