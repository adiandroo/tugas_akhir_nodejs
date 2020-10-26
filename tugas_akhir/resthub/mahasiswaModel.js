// contactModel.js
var mongoose = require('mongoose');

// Setup schema
var mahasiswaSchema = mongoose.Schema({
    nim: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    jurusan: String,
    semester: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Contact model
var Mahasiswa = module.exports = mongoose.model('mahasiswa', mahasiswaSchema);
module.exports.get = function (callback, limit) {
    Mahasiswa.find(callback).limit(limit);
}