require('dotenv').config()
const
    mongoose = require('mongoose');
// adding the possibility to run locally and then when internet conenction is available just merge with the local mongo database 
//aggiungere anche il nome  dell azienda e anche l immagine .
const databaseConnection = mongoose.connect(process.env.LOCAL_DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err)
        return err
    }
    console.log("CONNECTED TO welcomeGuestsDatabase")
})
module.exports = databaseConnection