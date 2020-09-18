const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURL, {
           useNewParser: true,
           useCreateIndex: true 
        });
        console.log('Connect to database');
    } catch(err) {
        console.log(err.message);
        //Exit 
        process.exit(1)
    }
}

module.exports = connectDB