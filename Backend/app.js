const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const cors = require('cors')
const connectToDb = require('./db/db')
const userRoutes = require('./routes/user.route')

const app = express();
connectToDb()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Setup!')
})

app.use('/users', userRoutes)



module.exports = app;