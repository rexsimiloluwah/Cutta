const mongoose = require('mongoose')

// Async function for connecting to mongodb atlas db

const connectToMongo = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })

        console.log(`MongoDB successfully connected at ${conn.connection.host}`)
    }

    catch(err){
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectToMongo