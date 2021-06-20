import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    images: [{
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    }],
    chunks: {
        type: Array,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

export default mongoose.model('Blog', BlogSchema)