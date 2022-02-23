import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import cors from 'cors'
import Connection from './database/database.js';
import Defaultdata from './default.js'
import Routes from './routes/route.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

const URL = `mongodb+srv://${username}:${password}@ms.q54bx.mongodb.net/WPCLONE?retryWrites=true&w=majority`;

Connection(process.env.MONGODB_URI || URL);

if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'))
}

app.listen(PORT, () => console.log('port started'))
Defaultdata();

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/', Routes)

