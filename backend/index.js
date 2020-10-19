const functions = require('firebase-functions');

// Express server

const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv  = require('dotenv')
const connectToMongo = require('./config/connectToMongo')
// Configure environment variables
dotenv.config()

// Routes 
const indexRoute  = require('./routes/index')
const urlRoute = require('./routes/url')

// PORT for the application
const PORT = process.env.PORT || 5000

// Instantiate the express application
const app = express()

// Setting up neccesary middlewares for the application
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

// Configuring the express Handlebars 
app.engine('.hbs', exphbs({extname: '.hbs'}))
app.set('view engine', '.hbs')
// Static files
app.use(express.static(path.join(__dirname, "public")))


app.use('/', indexRoute)
app.use('/api/url', urlRoute)
app.use(morgan('dev'))

// Connect to MongoDB Database
connectToMongo()


app.get('/', (req, res, next) => {

    res.render('index')
})

// Handling CORS Error

app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    
    if (req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({})
    }

    next()
})

// Running the server
app.listen( PORT, () => {
    console.log(`Server running on PORT : ${PORT}`)
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app)
