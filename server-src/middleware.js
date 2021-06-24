import Article from "./models/Article"
import Video from "./models/Video"

// checks db collection for an existing record
export const recordExists = async (req, res, next) => {
    let Collection 
    switch (req.baseUrl) {
        case '/api/videos':
            Collection = Video 
            break 

        case '/api/articles':
            Collection = Article
    }

    try {
        let record = await Collection.findOne({ name: req.body.name.toLowerCase() })
        record ? req.record = record : req.record = null
        next()
    } catch (e) {
        return res.status(500).json({ messages: [
            { type: 'error' },
            { message: 'Something went wrong: ' + e.message }
        ]})
    }
}