const mongoose = require('mongoose');
    
const newUserSchema = new mongoose.Schema({
    name: {type: String},
    password: {type: String}
});

var posts = mongoose.model('userDetail', newUserSchema);

module.exports = posts;