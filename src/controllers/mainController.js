const { validationResult } = require("express-validator");

module.exports = {
    home: (req, res) => {
        return res.render('index');
    },
    exit: (req, res) => {
        res.locals.usuario = req.session.usuario
        res.render('exit', { userName: req.session.userName })
    },



    form: (req, res) => {


        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const { name, color, email, age } = req.body

            req.session.usuario = color
            res.locals.usuario = color
            req.session.userName = name


            if (req.body.remember !== undefined) {
                res.cookie('color', color, { maxAge: 60 * 1000 })
            }
            res.render('index', { name, color, email, age })
        } else {

            res.render('index', { errors: errors.mapped(), old: req.body })
        }
    },




    destroy: (req, res) => {
        req.session.destroy();
        res.cookie('color', null, { maxAge: -1 })
        res.redirect("/");
    },

};
