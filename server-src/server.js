// packages
import express from 'express'
import http from 'http'
import path from 'path'
import fs from 'fs'
import helmet from 'helmet'
import 'ignore-styles'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../shared/App'
import { StaticRouter } from 'react-router-dom'
import { connectDB } from './config/db'
import { routes } from '../shared/routes'
import contentRouter from './api/contentRouter'
import { setHeaders } from './middleware'

// app init
const app = express()
app.use(helmet())
app.use(express.json())

// server
const port = process.env.PORT || 4000
http.createServer(app)
    .listen(port, () => {
        console.log(`server running in ${process.env.NODE_ENV} on port ${port}`)
    })

// db
connectDB()

function sendApp(req, res) {
    const indexPath = path.resolve(__dirname, '../', 'public', 'index.html')
    const appHTML = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={{}}>
                <App />
            </StaticRouter>
    )

    // inject stringified <App /> component into html file
    fs.readFile(indexPath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send('Something went wrong, please check server logs')
        }

        return res.status(200).send(data.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`))
    })
}

// SPA routes
routes.forEach(route => {
    app.get(route.path, setHeaders, (req, res) => {
        return sendApp(req, res)
    })
    if (route.hasNestedRoute) {
        app.get(`${route.path}/:id`, setHeaders, (req, res) => {
            res.header('X-Powered-By', 'love')
            return sendApp(req, res)
        })
    }
})

app.use(express.static('public'))

// content router
app.use('/api/content', setHeaders, contentRouter)