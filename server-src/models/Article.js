import mongoose from 'mongoose'

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    heroImg: {
        type: String,
        required: false
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
    this.title = this.title.toLowerCase()
})

export default mongoose.model('Article', ArticleSchema)