// packages
import express from 'express'
import fs from 'fs'
import GridFile from '../models/GridFile'
import path from 'path'
import { fileExists } from '../middleware'
import Video from '../models/Video'

// router 
const fileRouter = express.Router()

//routes

// @method POST
// @route /api/files/videos
// @desc upload a video to db
// @access private
fileRouter.post('/videos', fileExists, async (req, res) => {
    try {
        if (req.file) {
            return res.status(209).json({ messages: [
                { type: 'error' },
                { message: 'A video with that name already exists' }
            ]})
        }

        const { title, url } = req.body
        const newVideo = new Video({ title, url })
        await newVideo.save()
        return res.status(201).json({ messages: [
            { type: 'success' },
            { message: 'Video successfully uploaded' }
        ]})
    } catch (e) {
        return res.status(500).send('Something went wrong: ' + e.message)
    }
})

// @method GET
// @route /api/files/videos
// @desc get all videos 
// @access public
fileRouter.get('/videos', async (req, res) => {
    try {
        let videos = await Video.find()
        res.json(videos.map(video => (
            {
                title: video.title,
                url: video.url
            }
        )))
    } catch (e) {
        return res.status(500).send('Something went wrong: ' + e.message)

    }
})

// @method GET
// @route /api/files/videos/:filename
// @desc get a video by filename
// @access public
fileRouter.get('/videos/:filename', async (req, res) => {
    try {
        if (!req.file) return res.status(404).json({ messages: [
            { type: 'error' },
            { message: 'Unable to find file' }
        ]})

        // remove url encoding and lowercase
        let video = await GridFile.findOne({ filename: req.file })

        res.header('Content-Type', video.contentType)
        res.header('Content-Length', video.length)

        let stream = req.gfs.createReadStream({ filename: req.file })
        stream.pipe(res)
    } catch (e) {
        return res.status(500).send('Something went wrong: ' + e.message)
    }
})


export default fileRouter