import mongoose from 'mongoose'

export default function connectToMongoDB(): void {
    mongoose.connect(process.env.MONGO_HOST as string, {
        autoCreate: true
    })
}