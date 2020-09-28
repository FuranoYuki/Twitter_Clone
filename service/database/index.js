const mongoose = require('mongoose');

mongoose.connect( process.env.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected with database!');
}).catch(error => {
    console.log({warning: 'error at connect with databse', error});
});


module.exports = mongoose;
