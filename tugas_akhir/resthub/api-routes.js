// api-routes.js
// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import contact controller
var siswaController = require('./mahasiswaController');

// Contact routes
router.route('/mahasiswa')
    .get(mahasiswaController.index)
    .post(mahasiswaController.new);
router.route('/mahasiswa/:mahasiswa_id')
    .get(mahasiswaController.view)
    .patch(mahasiswaController.update)
    .put(mahasiswaController.update)
    .delete(mahasiswaController.delete);

// Export API routes
module.exports = router;