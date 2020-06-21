// REQUIRES
const express = require('express')
const path = require('path')
// ENVIROMENT VARIABLES
const PORT = process.env.PORT || 3000
// EXPRESS APP
const app = express()
// STATIC FOLDER
const publicPath = path.join(__dirname, '../build')
app.use(express.static(publicPath))

// ROUTES
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

// LISTEN
app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})