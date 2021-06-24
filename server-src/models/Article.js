import mongoose from 'mongoose'

const ArticleSchema = new mongoose.Schema({
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
        required: true
    },
    heroImgSrc: {
        type: String,
        required: true
    },
    heroImgAlt: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

ArticleSchema.pre('save', function() {
    this.name = this.name.toLowerCase()
})

export default mongoose.model('Article', ArticleSchema)