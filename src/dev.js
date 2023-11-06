const chalk = require('chalk');
if (!process.argv[2]) {
    console.log(chalk.red(`[ERROR]`), chalk.white(`>>`), chalk.red(`Developer Badge`), chalk.white(`>>`), chalk.red(`Please provide a member id!`))
    process.exit(1);
}
require('dotenv').config('./.env');
const mongoose = require('mongoose');
const model = require('./database/models/badge.js');
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_TOKEN, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(chalk.green(`[SUCCESS]`), chalk.white(`>>`), chalk.green(`Developer Badge`), chalk.white(`>>`), chalk.green(`Connected to the database!`))
}).catch((err) => {
    console.log(chalk.red(`[ERROR]`), chalk.white(`>>`), chalk.red(`Developer Badge`), chalk.white(`>>`), chalk.red(`Failed to connect to the database!`))
    console.log(err)
    process.exit(1);
});

model.findOne({
    User: process.argv[2]
}, async (err, data) => {
    if (err) console.log(err);
    if (!data) {
        const newData = new model({
            User: process.argv[2],
            FLAGS: [
                "DEVELOPER"
            ]
        });
        try {
            await newData.save();
        } catch (err) {
            console.log(err)
        }
        console.log((chalk.white(`>>`)), chalk.red(`Developer Badge`), chalk.green(`has been added to the user!`))
        mongoose.connection.close();
        process.exit(0);
    }
    if (data) {
        // Update the document
        data.FLAGS.push("DEVELOPER");
        try {
            await data.save();
        } catch (err) {
            console.log(err)
        }
        console.log((chalk.white(`>>`)), chalk.red(`Developer Badge`), chalk.green(`has been added to the user!`))
        mongoose.connection.close();
        process.exit(0);
    }
});