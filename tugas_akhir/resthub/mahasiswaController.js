// contactController.js
// Import contact model
Mahasiswa = require('./mahasiswaModel');

// Handle index actions
exports.index = function (req, res) {
    Mahasiswa.get(function (err, mahasiswas) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Data Mahasiswa Berhasil Didapatkan",
            data: mahasiswas
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    var mahasiswa = new Mahasiswa();
    mahasiswa.nama = req.body.nama ? req.body.nama : mahasiswa.nama;
    mahasiswa.nim = req.body.nim;
    mahasiswa.jurusan = req.body.jurusan;
    mahasiswa.semester = req.body.semester;

    // save the contact and check for errors
    mahasiswa.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'Mahasiswa baru terdaftar',
            data: mahasiswa
        });
    });
};

// Handle view contact info
exports.view = function (req, res) {
    Mahasiswa.findById(req.params.mahasiswa_id, function (err, mahasiswa) {
        if (err)
            res.send(err);
        res.json({
            message: 'Mahasiswa details loading..',
            data: mahasiswa
        });
    });
};

// handle update data
exports.update = function (req, res) {
    Mahasiswa.findById(req.params.mahasiswa_id, function (err, mahasiswa) {
        if (err)
            res.send(err);
        mahasiswa.nama = req.body.nama ? req.body.nama : mahasiswa.nama;
        mahasiswa.nim = req.body.nim;
        mahasiswa.jurusan = req.body.jurusan;
        mahasiswa.semester = req.body.semester;

        // save contact
        mahasiswa.save(function (err) {
            if (err)
                req.json(err);
            req.json({
                message: 'Mahasiswa Info Updated',
                data: mahasiswa
            });
        });
    });
};

// handle delete data
exports.delete = function (req, res) {
    Mahasiswa.remove({
        _id: req.params.mahasiswa_id
    }, function (err, mahasiswa) {
        if (err)
            res.send(err);

        req.json({
            status: "success",
            message: 'Mahasiswa deleted'
        });
    });
};

// Handle update contact info
exports.update = function (req, res) {
    Mahasiswa.findById(req.params.mahasiswa_id, function (err, mahasiswa) {
        if (err)
            res.send(err);
        mahasiswa.nama = req.body.nama ? req.body.nama : mahasiswa.nama;
        mahasiswa.nim = req.body.nim;
        mahasiswa.jurusan = req.body.jurusan;
        mahasiswa.semester = req.body.semester;
        // save the contact and check for errors
        mahasiswa.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Mahasiswa Info updated',
                data: mahasiswa
            });
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Mahasiswa.remove({
        _id: req.params.mahasiswa_id
    }, function (err, mahasiswa) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Mahasiswa deleted'
        });
    });
};