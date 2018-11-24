const path = require('path')
const publicPath = path.join(__dirname, '../public')

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.static(publicPath))



const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('server is up on port', 3000)
})