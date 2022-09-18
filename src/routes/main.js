var express = require('express');
var router = express.Router();
const { home, about, contact, services, admin, login } = require('../controllers/mainController');
const adminCheck = require('../middleware/adminCheck');
/* GET home page. */

router
    .get('/', home)
    .get('/about', about)
    .get('/contact', contact)
    .get('/services', services)
    .get('/admin', adminCheck, admin)
    .get('/login', login)




module.exports = router;