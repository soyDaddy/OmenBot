const mongoose = require('mongoose');
const { textColored } = require('../lib/function')
const { checkOwner } = require('../lib/utils');
async function connect() {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_TOKEN, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log(textColored(`⋆⦿ ⋆ MongoDB Connection: connected`,'#00FFFF'));
        console.log(textColored("════════════════ ⋆★ ⋆ ════════════════", '#800080'));
        checkOwner();
    }).catch((err) =>{
        console.log(textColored(`⋆⦿ ⋆ MongoDB Connection: errored`,'#00FFFF'));
        console.log(textColored(`⋆⦿ ⋆ MongoDB Error: `+err,'#00FFFF'));
        console.log(textColored("════════════════ ⋆★ ⋆ ════════════════", '#800080'));
        process.exit(1)
    });
    return;
}

module.exports = connect