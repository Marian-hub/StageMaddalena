require('dotenv').config()
const
    mongoose = require('mongoose');
const databaseConnection = mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err)
        return err
    }
    console.log("CONNECTED TO welcomeGuestsDatabase")
}, { 'useFindAndModify': false })
module.exports = databaseConnection