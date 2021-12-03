const X = require('express')
const APP = X()
const PORT = 1999
const PATH = require('path');

// APP.use(X.static(PATH.join(__dirname, '../public')));
APP.use('/webshop', X.static(PATH.join(__dirname, '../public/webshop')));

APP.listen(PORT, () => {
    console.log(`Webshop running at http://localhost:${PORT}`)
})