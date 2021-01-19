require('dotenv').config()
require('./helpers/dbConnection')
const
    express = require('express'),
    cors = require('cors'),
    routes = require('./routes/index');
const
    app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(routes)
app.listen(process.env.PORT || 5000, err => { err })