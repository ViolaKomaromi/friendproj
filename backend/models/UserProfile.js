let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let UserProSchema = new Schema({
    fullname: { type: String, required: false },
    gender: { type: String, required: false },
    bio: { type: String, required: false},
    hobbies: { type: String, required: false},
    beverages: { type: String, required: false},
    dishes: { type: String, required: false},
    states: { type: String, required: false},
    cities: { type: String, required: false},
    avatar: { type: String }
});

module.exports = mongoose.model('userspros', UserProSchema);