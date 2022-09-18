module.exports = {
    home: (req, res) => {

        res.render('index')

    }, about: (req, res) => {

        res.render('about')

    },
    contact: (req, res) => {

        res.render('contact')

    },
    services: (req, res) => {

        res.render('services')
    },
    admin: (req, res) => {

        res.render('admin', {
            user: req.query.user
        })
    },
    login: (req, res) => {

        res.render('login', {
            error: req.query.error ? 'No tienes los privilegios para ingresar' : null
        })
    }
}