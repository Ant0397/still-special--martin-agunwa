import mongoose from 'mongoose'

export const connectDB = async () => {
    try { 
        const connection = await mongoose.connect(process.env.NODE_ENV === 'production' ? process.env.DB_STRING__LIVE : process.env.DB_STRING__STAGING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('DB Connected: ' + connection.connection.db.databaseName)
    } catch (e) {
        console.error('Error connecting to DB: ' + e.message)
        process.exit(1)
    }
}