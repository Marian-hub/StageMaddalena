require('dotenv').config()
require('./helpers/dbConnection')
const
    express = require('express'),
    routes = require('./routes/index');
const
    app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.listen(process.env.PORT || 5000, err => { err })