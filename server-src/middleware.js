import Video from "./models/Video"

export const fileExists = async (req, res, next) => {
    try {
        let { title } = req.body
        let video = await Video.findOne({ title: title.toLowerCase() })
        video ? req.file = video : req.file = null
        next()
    } catch (e) {
        return res.status(500).send('Something went wrong: ' + e.message)
    }
}