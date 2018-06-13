const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const port = process.env.PORT || 8000

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'dist')))



app.listen(port, () => console.log(`express server listening on port ${port}`))