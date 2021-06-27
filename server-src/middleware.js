import Content from "./models/Content"

// checks db collection for an existing record
export const recordExists = async (req, res, next) => {
    let Collection 
    switch (req.baseUrl) {
        case '/api/content':
            Collection = Content 
            break 
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