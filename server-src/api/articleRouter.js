// packages
import express from 'express'
import Article from '../models/Article'
import mammoth from 'mammoth'
import fs from 'fs'
import { recordExists } from '../middleware'

// router
const articleRouter = express.Router()

// routes

// @method POST
// @route /api/articles
// @desc upload a article to db
// @access private
articleRouter.post('/', recordExists, async (req, res) => {
    try {
        if (req.record) {   
            return res.status(209).json({ messages: [
                { type: 'error' },
                { message: 'An article with that name already exists' }
            ]})
        }

        let { name, shortTitle, longTitle, type, heroImgSrc, heroImgAlt, path } = req.body
    
        let url = `/${type}/${shortTitle.toLowerCase().replace(/( |_)/g, '-').replace(/(!|<|>|\+|#|\(|\)|{|}|\[|\]|=|"|£|\$|%|\^|&|\*|:|@|\'|\/|\.|,|\/|\?)/g, '')}`
    
        let content = await mammoth.convertToHtml({ path })
            .then(result => {
                return result.value
            })

        fs.readFile(heroImgSrc, null, async (err, data) => {
            let src = `data:image/${heroImgSrc.split('.')[1]};base64,${Buffer.from(data).toString('base64')}`
            let article = new Article({
                name,
                shortTitle,
                longTitle,
                heroImgSrc: src,
                heroImgAlt,
                content,
                type,
                url
            })

            await article.save()
            return res.status(201).json({ messages: [
                { type: 'success' },
                { message: 'Article successfully uploaded' }
            ]})
    })

    } catch (e) {
        return res.status(500).json({ messages: [
            { type: 'error' },
            { message: 'Something went wrong: ' + e.message }
        ]})
    }
})

articleRouter.get('/', async (req, res) => {
    let articles = await Article.find()
    res.json(articles)
})

export default articleRouter