const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment')
//db connection

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/webdb', {
    useNewUrlParser: true,
    useCreateIndex: true
});

// schema
const guestMessage = new mongoose.Schema({
    name: String,
    password: String,
    message: String,
    regDate: {
        type: Date,
        default: Date.now
    }
},{
    versionKey: false
});

autoIncrement.initialize(mongoose.connection);
guestMessage.plugin(autoIncrement.plugin, 'GuestMessage');
module.exports = mongoose.model('GuestMessage', guestMessage);