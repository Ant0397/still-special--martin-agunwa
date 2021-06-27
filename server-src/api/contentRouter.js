// packages
import express from 'express'
import Content from '../models/Content'
import mammoth from 'mammoth'
import fs from 'fs'
import { recordExists } from '../middleware'

// router
const contentRouter = express.Router()

// routes

// @method POST
// @route /api/content
// @desc upload a article to db
// @access private
contentRouter.post('/', recordExists, async (req, res) => {
    try {
        if (req.record) {   
            return res.status(209).json({ messages: [
                { type: 'error' },
                { message: 'Content with that name already exists' }
            ]})
        }

        let { name, shortTitle, longTitle, category, subCategory, thumbnailImgSrc, thumbnailImgAlt, streamLink, path, likes, views } = req.body
    
        let url = `/${subCategory}/${shortTitle.toLowerCase().replace(/(!|-|<|>|\+|#|\(|\)|{|}|\[|\]|=|"|£|\$|%|\^|&|\*|:|@|\'|\/|\.|,|\/|\?)/g, '').replace(/( |_)/g, '-')}`
    
        let content
        category != 'video'
            ? content = await mammoth.convertToHtml({ path })
                .then(result => {
                    return result.value
                })
            : content = streamLink

        let newContentRecord
        if (thumbnailImgSrc) {
            fs.readFile(thumbnailImgSrc, null, async (err, data) => {
                let src = `data:image/${thumbnailImgSrc.split('.')[1]};base64,${Buffer.from(data).toString('base64')}`
                newContentRecord = new Content({
                    name,
                    shortTitle,
                    longTitle,
                    thumbnailImgSrc: src,
                    thumbnailImgAlt,
                    content,
                    category,
                    subCategory,
                    url,
                    likes,
                    views
                })
                await newContentRecord.save()
            })
        } else {
            newContentRecord = new Content({
                name,
                shortTitle,
                content,
                category,
                subCategory,
                likes,
                views
            })
            await newContentRecord.save()
        }

        return res.status(201).json({ messages: [
            { type: 'success' },
            { message: `${category} successfully uploaded` }
        ]})

    } catch (e) {
        return res.status(500).json({ messages: [
            { type: 'error' },
            { message: 'Something went wrong: ' + e.message }
        ]})
    }
})

// @method GET
// @rotue /api/content
// @desc return all articles 
// @access public
contentRouter.get('/', async (req, res) => {
    try {
        let allContent = await Content.find()
        return res.json(allContent)
    } catch (e) {
        return res.status(500).json({ messages: [
            { type: 'error' },
            { message: 'Something went wrong: ' + e.message }
        ]})
    }
})

// @method PATCH
// @route /api/content/analytic
// @desc update an analytic for an article
// @access public 
contentRouter.patch('/analytic', recordExists, async (req, res) => {
    try {
        if (!req.record) {   
            return res.status(404).json({ messages: [
                { type: 'error' },
                { message: 'Article not found' }
            ]})
        }

        let { analytic, value }= req.body

        await req.record.updateOne({ [analytic]: value })
        return res.sendStatus(204)
    } catch (e) {
        return res.status(500).json({ messages: [
            { type: 'error' },
            { message: 'Something went wrong: ' + e.message }
        ]})
    }
})

export default contentRouter