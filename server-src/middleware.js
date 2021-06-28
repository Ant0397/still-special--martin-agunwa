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

export const setHeaders = (req, res, next) => {
    res.header('X-Powered-By', 'love')
    res.header('Content-Security-Policy', "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-src 'self' https://*.youtube.com;img-src 'self' data:;object-src 'none';script-src 'self' https://*.youtube.com;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests")
    next()
}