import mongoose from 'mongoose'

const VideoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true 
    }
})

VideoSchema.pre('save', function() {
    this.title = this.title.toLowerCase()
})

export default mongoose.model('Video', VideoSchema)