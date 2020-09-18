const express = require('express')
const path = require('path')
const connectDB = require('./db/db')
const userRouter = require('./routes/user.routes')

require('dotenv').config()

const app = express()

const connect = mongoose.connect(url);

// For connecting the database
connectDB();

app.use(express.json({extended: false}))

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Testing")
    console.log(process.env.JWTSECRETKEY)
})
app.use('/api/users', userRouter)

app.listen(PORT, () => {
    console.log(`Server started on the port ${PORT}`)
})