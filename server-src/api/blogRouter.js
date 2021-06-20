// packages
import express from 'express'
import fs from 'fs'
import Blog from '../models/Blog'

// router
const blogRouter = express.Router()

// routes

// @method POST
// @route /api/blogs
// @desc upload a blog to db
// @access private
blogRouter.post('/', (req, res) => {

})

blogRouter.get('/', async (req, res) => {
    let blogs = await Blog.find()
    res.json(blogs)
})

export default blogRouter