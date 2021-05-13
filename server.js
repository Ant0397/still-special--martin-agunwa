// packages
const express = require('express')
const http = require('http')
const path = require('path')

// app init
const app = express()
app.use(express.static('public'))
app.use(express.json())

// server
const port = process.env.PORT || 4000
http.createServer(app)
    .listen(port, () => {
        console.log(`server running in ${process.env.NODE_ENV} on port ${port}`)
    })

// index route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})