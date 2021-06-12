// packages
import express from 'express'
import http from 'http'
import path from 'path'
import fs from 'fs'
import 'ignore-styles'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../shared/App'
import { StaticRouter } from 'react-router-dom'

// app init
const app = express()
app.use(express.json())

// server
const port = process.env.PORT || 4000
http.createServer(app)
    .listen(port, () => {
        console.log(`server running in ${process.env.NODE_ENV} on port ${port}`)
    })

// index route
app.get('/:var(about|about/cv|blog|blog/[1-9999]|campaigns|case-study|case-study/[1-9999])?', (req, res) => {
    const indexPath = path.resolve(__dirname, '../', 'public', 'index.html')
    const appHTML = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={{}}>
                <App />
            </StaticRouter>
    )
    fs.readFile(indexPath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send('Something went wrong, please check server logs')
        }

        return res.status(200).send(data.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`))
    })
})

app.use(express.static('public'))