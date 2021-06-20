import schema from 'gridfile'
import mongoose from 'mongoose'

const GridFile = mongoose.model('GridFile', schema)

export default GridFile