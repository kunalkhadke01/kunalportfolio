const mongoose = require('mongoose');

mongoose.Promise = global.Promise;  //ES6 promise

//get connection from mongodb
before((done) => {
    mongoose.connect("mongodb://localhost:27017/imagegallery", { useNewUrlParser: true });

    mongoose.connection
        .once('open', () => {
            console.log('mongodb connected')
            done()
        })
        .on('error', (error) => {
            console.log("my error", error)
        })
})
