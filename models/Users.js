const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
});

module.exports = Users = mongoose.model('mc_users', usersSchema);