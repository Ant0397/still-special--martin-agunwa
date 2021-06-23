// packages
import express from 'express'
import Article from '../models/Article'
import mammoth from 'mammoth'
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

        let { title, type, path } = req.body
    
        let url = `/${type}/${title.toLowerCase().replace(/ /g, '-')}`
    
        let content = await mammoth.convertToHtml({ path })
            .then(result => {
                return result.value
            })
    
        let article = new Article({
            title,
            content,
            type,
            url
        })

        await article.save()
        return res.status(201).json({ messages: [
            { type: 'success' },
            { message: 'Article successfully uploaded' }
        ]})

    } catch (e) {
        return res.status(500).json({ messages: [
            { type: 'error' },
            { message: 'Something went wrong: ' + e.message }
        ]})
    }

    
})

articleRouter.get('/:type', async (req, res) => {
    let { type } = req.params
    let articles = await Article.find({ type })
    res.json(articles)
})

export default articleRouter