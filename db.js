const mongoose = require('mongoose')


const connectDB = async () => {
    try {
       await mongoose.connect('mongodb+srv://admin:Eyc4oE8sPfnuicvx@usercluster.1aj35.mongodb.net/?retryWrites=true&w=majority');
       console.log('connected')
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

module.exports = connectDB;
