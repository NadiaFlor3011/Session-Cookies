var express = require('express');
var router = express.Router();
const { home, exit, form, destroy } = require('../controllers/mainController')
const validator = require('../validations/registerValidator')


/* GET home page. */

router
    .get('/exit', exit)
    .get('/', home)

    .post('/', validator, form)
    .get('/logout', destroy)





module.exports = router;