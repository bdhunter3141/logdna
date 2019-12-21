const express = require('express')
require('dotenv').config()

// Middleware

const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

let db

// Heroku Database Connection

if (process.env.NODE_ENV === 'production') {
  db = require('knex')({
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: true
    }
  })
}

// Local Database Connection

if (process.env.NODE_ENV === 'development') {
  db = require('knex')({
    client: 'pg',
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME
    }
  })
}

// Controllers
const main = require('./controllers/main')

// Application
const app = express()

// App Middleware
const whitelist = ['http://localhost:3001']
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(helmet())
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(morgan('combined'))

// Routes

app.get('/', (req, res) => res.send('Hello World.'))
app.get('/messages', (req, res) => main.getMessageData(req, res, db))
app.post('/messages', (req, res) => main.postMessageData(req, res, db))

// Application - Server Connection

app.listen(process.env.PORT || 3000, () => {
  console.log(`Application is listening on port ${process.env.PORT || 3000}`)
})