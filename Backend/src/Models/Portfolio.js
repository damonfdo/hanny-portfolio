import mongoose from 'mongoose'

const portfolioSchema = mongoose.Schema({
    name: String,
    image: String,
    created_at: {
        type: Date,
        default: new Date()
    }
})

var Portfolio = mongoose.model('portfolio', portfolioSchema)

export default Portfolio