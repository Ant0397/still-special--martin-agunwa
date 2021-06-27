import mongoose from 'mongoose'

const ContentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    shortTitle: {
        type: String,
        required: true
    },
    longTitle: {
        type: String,
        required: false
    },
    thumbnailImgSrc: {
        type: String,
        required: false
    },
    thumbnailImgAlt: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: false
    },
    views: {
        type: Number,
        required: true
    },
    likes: {
        type: Number,
        required: true 
    }
})

ContentSchema.pre('save', function() {
    this.name = this.name.toLowerCase()
})

export default mongoose.model('Content', ContentSchema)